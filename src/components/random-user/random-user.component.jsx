import React, {Component} from 'react';

import './random-user.styles.scss';

import Modal from 'react-responsive-modal'                                  // eslint-disable-next-line
//import MyBtn, {BtnUpdate} from '../buttons/MyBtn'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { MdPlace } from 'react-icons/md'
import { MdPhone } from 'react-icons/md'

class RandomUser extends Component { 
    state = {
        open: false,
        users: []
    }

    onOpenModal = () => {
        this.setState({ open: true });
    }
    
    onCloseModal = () => {
        this.setState({ open: false });
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
                            phone: user.phone, smallPicture: user.picture.thumbnail, picture: user.picture.large, mediumPicture: user.picture.medium})
                return users
            })
            this.setState({users: users})
            localStorage.setItem('users', JSON.stringify(this.state.users))
          })
    }
      
    render(){
        const { open } = this.state;

        let picture = ''
        let firstName = ''
        let lastName = ''
        let pictureLarge = ''
        let mediumPicture = ''
        let street = ''
        let city = ''
        let state = []
        let postcode = ''
        let username = ''
        let password = ''
        let phone = ''
        for(let i = 0; i < this.state.users.length; i++) {
            picture = this.state.users[0].smallPicture
            firstName = this.state.users[0].firstName
            lastName = this.state.users[0].lastName
            pictureLarge = this.state.users[0].picture
            mediumPicture = this.state.users[0].mediumPicture
            street = this.state.users[0].street
            city = this.state.users[0].city
            state = this.state.users[0].state
            postcode = this.state.users[0].postcode
            username = this.state.users[0].username
            password = this.state.users[0].password
            phone = this.state.users[0].phone
        }
    return(
        <div className='cont-profile'>
            <div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div className='imgWrapper'>
                        <img id='userImage' src={pictureLarge} alt='User Profile' data-img={mediumPicture} data-first={firstName} data-last={lastName}/>
                    </div>
                    <div className='modal'>
                        <h1 className='h1'>{firstName} {lastName}</h1>
                        <p className='p'><MdPlace className='mdPlace' /> {street.number}{street.key}, {city}, {state} {postcode}</p>
                        <p className='p'><MdPhone className='mdPhone' /> {phone}</p>
                        <p><span className='span'>username: </span>{username}</p>
                        <p><span className='span'>password: </span>{password}</p>
                    </div>
                    <div className='btnDiv'>
                        <button btnText="Update Profile" icon={<IoIosCheckmarkCircle className='ioIosCheckmarkCircle' />}></button>
                    </div>
                </Modal>
            </div>
            <img src={picture} className='profile' onClick={this.onOpenModal} alt='User Profile'/>
        </div>
        )
    }
}
    
export default RandomUser

