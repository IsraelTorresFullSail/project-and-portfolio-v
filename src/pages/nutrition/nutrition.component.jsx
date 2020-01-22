import React from 'react';

import './nutrition.styles.scss';

import RecipePreview from '../../components/recipe-preview/recipe-preview.component';
import LastRecipes from '../../components/last-recipes/last-recipes.component';
import RecipeImage from '../../components/recipe-image/recipe-image.component';

class NutritionPage extends React.Component {
    constructor() {
        super();

        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        let recipes;                                                                                                                  // eslint-disable-next-line
        if(recipes = JSON.parse(localStorage.getItem('recipes'))) {
            recipes = JSON.parse(localStorage.getItem('recipes'));
            this.setState({recipes: recipes});
        }
      }

    render() {
        let recipeImage = '';
        for(let i = 0; i < this.state.recipes.length; i++) {
        recipeImage = this.state.recipes[i][1].image;
        }

        return(
            <div>
                <RecipePreview 
                    image={<RecipeImage src={recipeImage}
                    alt='Recipe Picture' />}
                >
                </RecipePreview>
                <LastRecipes />
            </div>
        )
    }
};

export default NutritionPage;