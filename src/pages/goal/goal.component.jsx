import React from 'react';

import './goal.styes.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import swal from 'sweetalert';

class GoalPage extends React.Component {
    constructor() {
        super();

        this.state = {
            goal: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    handleSubmit = async event => {

        // Save goal on Local Storage
        localStorage.setItem('goal', JSON.stringify(this.state.goal));

        // Clear form
        this.setState({ goal: ''});
    }

    reloadPage() {
        swal("Good job!", "Goal saved", "success")
        .then(() => {
            window.location.reload(false);
        })
        
    }

    onSubmit = e => {
        e.preventDefault();
        this.handleSubmit();
        this.reloadPage();
    }

    render() {

        return(
            <div className='goal-wrapper'>
                <h2>Make Your Goal:</h2>
                <div className='form-wrapper'>
                    <form onSubmit={this.onSubmit}>
                        <div className='cont-save-input'>
                            <div className='input'>
                                <FormInput
                                    name="goal"
                                    type='number'
                                    handleChange={this.handleChange}
                                    value={this.state.goal}
                                    placeholder='Calories goal'
                                    required
                                />
                            </div>
                            <div className='button'>
                                <CustomButton type='submit'> Save </CustomButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default GoalPage;