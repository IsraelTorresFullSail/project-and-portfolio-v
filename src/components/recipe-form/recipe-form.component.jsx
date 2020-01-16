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

    handleSubmit = async event => {
        event.preventDefault();

        const { title, preparation, ingredList } = this.state;

        let ingredForRecipe = [];
        ingredList.map(ingredient => {
            return ingredForRecipe.push(ingredient.iName);
        })

        // API url
        let app_id = 'adc095e3';
        let app_key = '998f1868f0f3bdc14e1070d4772ae0f3';
        const urlAPI = 'https://api.edamam.com/api/nutrition-details?app_id=' + app_id + '&app_key=' + app_key;

        // Recipe example
        const recipe = {
            "title": title,
            "prep": preparation,
            "ingr": ingredForRecipe
        }
        console.log(recipe);

        // Method POST
        const option = {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(recipe),
            headers: {
                'content-type': 'application/json'
            }
        }

        // Fetch request
        fetch(urlAPI, option)
            .then( response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then ( data => {
                console.log(data);
                console.table(data.totalNutrients);
                console.table(data.totalDaily);
                console.table(data.totalNutrientsKCal);
            })
            .catch( err => {
                console.log(err);
            })

        this.setState({ title: '', preparation: '',  ingredList: []});
    }
    

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
                            //required
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

