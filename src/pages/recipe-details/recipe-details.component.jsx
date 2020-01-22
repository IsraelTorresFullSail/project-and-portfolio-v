import React from 'react';
import { Link } from 'react-router-dom';

import './recipe-details.styles.scss';

import RecipeImage from '../../components/recipe-image/recipe-image.component';
import ViewButton from '../../components/view-button/view-button.component';

class RecipeDetailsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            currentRecipe: []
        }
    }

    componentDidMount() {
        let currentRecipe;                                                                                                                  // eslint-disable-next-line
        if(currentRecipe = JSON.parse(localStorage.getItem('currentRecipe'))) {
            currentRecipe = JSON.parse(localStorage.getItem('currentRecipe'));
            this.setState({currentRecipe: currentRecipe});
        }
        
    }

    capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        let recipeName = '';
        let preparation = '';
        let calories = '';
        let fats = '';
        let carbohydrates = '';
        let recipeImage = '';
        let proteins = '';
        let dietLabels = '';
        let energy = '';
        let saturated = '';
        let trans = '';
        let fiber = '';
        let sugars = '';
        let cholesterol = '';
        let sodium = '';
        for(let i = 0; i < this.state.currentRecipe.length; i++) {
            recipeImage = this.state.currentRecipe[1].image;
            recipeName = this.state.currentRecipe[0].title;
            preparation = this.state.currentRecipe[0].prep;
            dietLabels = this.state.currentRecipe[0].dietLabels;
            calories = this.state.currentRecipe[0].calories;
            fats = this.state.currentRecipe[0].fats.toFixed(2);
            carbohydrates = this.state.currentRecipe[0].carbohydrates.toFixed(2);
            proteins = this.state.currentRecipe[0].proteins.toFixed(2);
            energy = this.state.currentRecipe[0].energy.toFixed(2);
            saturated = this.state.currentRecipe[0].saturated.toFixed(2);
            trans = this.state.currentRecipe[0].trans.toFixed(2);
            fiber = this.state.currentRecipe[0].fiber.toFixed(2);
            sugars = this.state.currentRecipe[0].sugars.toFixed(2);
            cholesterol = this.state.currentRecipe[0].cholesterol.toFixed(2);
            sodium = this.state.currentRecipe[0].sodium.toFixed(2);
        }

        return(
            <div className='recipe-details'> 
                <RecipeImage src={recipeImage} alt='Current Recipe' />
                <h3>{recipeName}</h3>

                <div className='recipe-main-info'>
                    <div className='main-info-prep'>
                        <h5>Preparation:</h5>
                        <p>{preparation}</p>
                    </div>
                    <div className='main-info'>
                        <h5>Calories</h5>
                        <p>{calories}</p>
                    </div>
                    <div className='main-info'>
                        <h5>Diet Labels</h5>
                        <p>{dietLabels}</p>
                    </div>
                </div>

                <div className='table'>
                    <div className='th'>
                        <div className='td'>
                        </div>
                        <div className='td'>
                            <h6>Quantity</h6>
                        </div>
                        <div className='td'>
                            <h6>Unit</h6>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Energy</h6>
                        </div>
                        <div className='td'>
                            <p>{energy}</p>
                        </div>
                        <div className='td'>
                            <p>kcal</p>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Fat</h6>
                        </div>
                        <div className='td'>
                            <p>{fats}</p>
                        </div>
                        <div className='td'>
                            <p>g</p>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Saturated</h6>
                        </div>
                        <div className='td'>
                            <p>{saturated}</p>
                        </div>
                        <div className='td'>
                            <p>g</p>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Trans</h6>
                        </div>
                        <div className='td'>
                            <p>{trans}</p>
                        </div>
                        <div className='td'>
                            <p>g</p>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Carbs</h6>
                        </div>
                        <div className='td'>
                            <p>{carbohydrates}</p>
                        </div>
                        <div className='td'>
                            <p>g</p>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Fiber</h6>
                        </div>
                        <div className='td'>
                            <p>{fiber}</p>
                        </div>
                        <div className='td'>
                            <p>g</p>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Sugars</h6>
                        </div>
                        <div className='td'>
                            <p>{sugars}</p>
                        </div>
                        <div className='td'>
                            <p>g</p>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Protein</h6>
                        </div>
                        <div className='td'>
                            <p>{proteins}</p>
                        </div>
                        <div className='td'>
                            <p>g</p>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Cholesterol</h6>
                        </div>
                        <div className='td'>
                            <p>{cholesterol}</p>
                        </div>
                        <div className='td'>
                            <p>mg</p>
                        </div>
                    </div>
                    <div className='tr'>
                        <div className='td'>
                            <h6>Sodium</h6>
                        </div>
                        <div className='td'>
                            <p>{sodium}</p>
                        </div>
                        <div className='td'>
                            <p>mg</p>
                        </div>
                    </div>
                </div>
                <Link className='link' to='/home'>
                    <ViewButton type='button' > Close </ViewButton>
                </Link>
            </div>
        )
    }
};

export default RecipeDetailsPage;