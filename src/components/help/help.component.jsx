import React from 'react';

import './help.styles.scss';

import Modal from 'react-responsive-modal' 
import { FaQuestion } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';



class Help extends React.Component {
    constructor(){
        super();
        this.state = {
            open: false,
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    }
    
    onCloseModal = () => {
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;
        return(
            <div className='cont-help'>
                <div>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <div className='modal-support'>
                            <h1 className='h1'>Customer Support</h1>
                            <p className='p'>To reach Eat Green Customer Support:</p>
                            <p className='p'><MdEmail className='mdEmail' /> customersupport@eatgreen.com</p>
                            <p className='p'><MdPhone className='mdPhone' /> 1(800) 837-9017</p>
                        </div>
                    </Modal>
                </div>
                <FaQuestion className='question' onClick={this.onOpenModal} />
            </div>
        )
    }
};

export default Help;