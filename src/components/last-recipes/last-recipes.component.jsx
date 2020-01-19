import React from 'react';

import './last-recipes.styles.scss';

class LastRecipes extends React.Component {
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
        let recipeName = '';
        let recipeImage = '';
        for(let i = 0; i < this.state.recipes.length; i++) {
            recipeImage = this.state.recipes[1].image;
            recipeName = this.state.recipes[0].title;
        }
        return(
            <div className='last-recipes'>
                <div className='recipe-item'>
                    <img className='last-image' src={recipeImage} alt='Recipe' />
                    <h4>{recipeName}</h4>
                </div>
            </div>
        )
    }
};

export default LastRecipes;