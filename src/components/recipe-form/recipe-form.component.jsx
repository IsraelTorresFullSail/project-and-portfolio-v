import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { IoIosClose } from 'react-icons/io'
import swal from 'sweetalert';

import './recipe-form.styles.scss';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            preparation: '',
            ingredient: '',
            ingredList: [],
            results: []
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

    // Function to remove ingredient
    removeIngred = key => {
        let ingredList = [...this.state.ingredList]
        for (let i = 0; i < ingredList.length; i++) {
            if(ingredList[i].iId === key) {
                this.state.ingredList.splice(i, 1)
                this.setState({ingredList: this.state.ingredList})
            }
        }
        console.log('Ingred Removed')
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

        // Recipe object
        const recipe = {
            "title": title,
            "prep": preparation,
            "ingr": ingredForRecipe
        }

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
                let results = [];
                let key = Math.random();
                results.push({recipeId: key, title: title, prep: preparation, calories: data.calories, dietLabels: data.dietLabels,
                             energy: data.totalNutrients.ENERC_KCAL.quantity, proteins: data.totalNutrients.PROCNT.quantity,
                             fats: data.totalNutrients.FAT.quantity, saturated: data.totalNutrients.FASAT.quantity,
                             carbohydrates: data.totalNutrients.CHOCDF.quantity, trans: data.totalNutrients.FATRN.quantity,
                             fiber: data.totalNutrients.FIBTG.quantity, sugars: data.totalNutrients.SUGAR.quantity, 
                             cholesterol: data.totalNutrients.CHOLE.quantity, sodium: data.totalNutrients.NA.quantity});
                this.setState({results: results});

                // Save result on Local Storage
                localStorage.setItem('results', JSON.stringify(this.state.results));
            })
            .then (function() {
                swal("Good job!", "Recipe sent for analisys!", "success")
                .then(() => {
                    window.location.reload(false);
                })
            })
            .catch( err => {
                swal("Oops!", "Recipe with insufficient quality to process correctly", "error");
                console.log(err);
            })

        // Clear form
        this.setState({ title: '', preparation: '',  ingredList: []})
    }
    

    render() {
        let ingredList = this.state.ingredList.map(ingredient => {
            return <div className='ingredient-item' key={ingredient.iId}>
                        <h6 className='h6'>{ingredient.iName}</h6>
                        <button className='remove-item' type='button' onClick={() => this.removeIngred(ingredient.iId)}><IoIosClose className='icon-remove' /></button> 
                    </div>
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

