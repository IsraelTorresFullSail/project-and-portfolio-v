import React, {Component} from 'react';

import './random-user.styles.scss';

class RandomUser extends Component { 
    state = {
        users: []
    }

// Fetch Random User API
async componentDidMount(){
    await fetch('https://randomuser.me/api/?results=1')
          .then(async results => {
            return await results.json()
          })
          .then(data => {
            let users = []
            data.results.map((user) => {
                users.push({firstName: user.name.first, lastName: user.name.last, 
                            street: user.location.street, city: user.location.city,
                            state: user.location.state, postcode: user.location.postcode,
                            username: user.login.username, password: user.login.password,
                            phone: user.phone, smallPicture: user.picture.thumbnail, picture: user.picture.large, mediumPicture: user.picture.medium,
                            age: user.dob.age})
                return users
            })
            this.setState({users: users})
            localStorage.setItem('users', JSON.stringify(this.state.users))
          })
    }
      
    render(){

        let picture = ''
        let firstName = ''
        for(let i = 0; i < this.state.users.length; i++) {
            picture = this.state.users[0].smallPicture
            firstName = this.state.users[0].firstName
        }
    return(
        <div className='cont-profile'>
            <div className='nav-profile'>
                <img src={picture} className='profile' alt='User Profile'/>
                <p>Hi {firstName}!</p>
            </div>
        </div>
        )
    }
}
    
export default RandomUser

