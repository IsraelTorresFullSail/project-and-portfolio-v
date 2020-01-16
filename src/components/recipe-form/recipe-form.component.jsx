import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './recipe-form.styles.scss';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            preparation: '',
            ingredient: '',
            ingredList: []
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { title, preparation, ingredList } = this.state;



        this.setState({ title: '', preparation: '',  ingredList: []});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    // functioon to add a new ingredient
    createIngredient = e => {
        e.preventDefault();

        let ingredList = [];
        let id = Math.random();
        ingredList = [...this.state.ingredList, {iId: id, iName: this.state.ingredient}];
        this.setState({ingredList});

        // Clear Input
        this.setState({ingredient: ''});
    }

    // function to add a new recipe
    

    render() {
        console.log(this.state.ingredList)
        let ingredList = this.state.ingredList.map(ingredient => {
            return <div className='ingredient-item' key={ingredient.iId}><h6 className='h6'>{ingredient.iName}</h6></div>
        })
        return(
            <div className='recipe-form'>
                <h1>Your healthy food</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="title"
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.title}
                        placeholder='Recipe title'
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
                            name="ingredient"
                            type='text'
                            value={this.state.ingredient}
                            handleChange={this.handleChange}
                            placeholder='Add ingredients...'
                            required
                        />
                        <CustomButton type='button' isBtnAdd onClick={this.createIngredient}> Add </CustomButton>
                    </div>
                    <div className='ingredients-list'>
                        {ingredList}
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

