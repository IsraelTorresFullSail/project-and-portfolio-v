import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './recipe-form.styles.scss';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            preparation: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { name, preparation } = this.state;

        this.setState({ name: '', preparation: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='recipe-form'>
                <h1>Your healthy food</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="name"
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.name}
                        placeholder='Recipe name'
                        required
                    />
                    <FormInput
                        name="preparation"
                        type='text'
                        value={this.state.preparation}
                        handleChange={this.handleChange}
                        placeholder='Preparation'
                        required
                    />
                    <div className='cont-add-ingred'>
                        <FormInput
                            name="ingredients"
                            type='text'
                            value={this.state.ingredients}
                            handleChange={this.handleChange}
                            placeholder='Add ingredients...'
                            required
                        />
                        <CustomButton isBtnAdd> Add </CustomButton>
                    </div>
                    <div className='cont-btn-submit'>
                        <CustomButton type='submit'> Submit </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default RecipeForm;

