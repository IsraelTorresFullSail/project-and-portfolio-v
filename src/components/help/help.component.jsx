import React from 'react';

import './help.styles.scss';

import Modal from 'react-responsive-modal' 
import { FaQuestion } from 'react-icons/fa';



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
                        <div className='modal'>
                            <h1>Help</h1>
                            <p>Coming Soon</p>
                        </div>
                    </Modal>
                </div>
                <FaQuestion className='question' onClick={this.onOpenModal} />
            </div>
        )
    }
};

export default Help;