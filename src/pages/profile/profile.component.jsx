import React from 'react';

import './profile.styles.scss';

import { MdPlace } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

class Profile extends React.Component {
    constructor() {
        super();

        this.state = {
            user: []
        }
    }

    componentDidMount() {
        let user;                                                                                                                  // eslint-disable-next-line
        if(user = JSON.parse(localStorage.getItem('users'))) {
            user = JSON.parse(localStorage.getItem('users'));
            this.setState({user: user});
        } 
    }


    render() {
        let firstName = ''
        let lastName = ''
        let pictureLarge = ''
        let mediumPicture = ''
        let street = ''
        let city = ''
        let state = []
        let postcode = ''
        let phone = ''
        let age = ''
        let username = ''
        let password = ''
        for(let i = 0; i < this.state.user.length; i++) {
            firstName = this.state.user[0].firstName
            lastName = this.state.user[0].lastName
            pictureLarge = this.state.user[0].picture
            mediumPicture = this.state.user[0].mediumPicture
            street = this.state.user[0].street
            city = this.state.user[0].city
            state = this.state.user[0].state
            postcode = this.state.user[0].postcode
            phone = this.state.user[0].phone
            age = this.state.user[0].age
            username = this.state.user[0].username
            password = this.state.user[0].password
        }
        return(
            <div className='profile-wrapper'>
                <div className='imgWrapper'>
                    <img id='userImage' src={pictureLarge} alt='User Profile' data-img={mediumPicture} data-first={firstName} data-last={lastName}/>
                </div>
                <h2 className='h2'>{firstName} {lastName}</h2>
                <h3>Personal Info</h3>
                <div className='cont-border'>
                    <h4 className='h4'>Age: {age}</h4>
                    <p className='p'><MdPlace className='mdPlace' /> {street.number}{street.key}, {city}, {state} {postcode}</p>
                    <p className='p'><MdPhone className='mdPhone' /> {phone}</p>
                </div>
                <h3>Confidential Details</h3>
                <div className='cont-border'>
                    <div className='details'>
                        <h4 className='h4'>Username: {username}</h4>
                    </div>
                    <div className='details'>
                        <h4 className='h4'>Password: {password}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;