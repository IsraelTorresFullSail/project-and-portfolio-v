import React from 'react';

import './recipes.styles.scss';

class RecipesPage extends React.Component {
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

        let recipeItem = this.state.recipes.slice(0, 16).map(item => {
            let key = Math.random();
            return <div key={key} className='recipe-item'>
                        <img className='last-image' src={item[1].image} alt='Recipe' />
                        <h4>{item[0].title}</h4>
                    </div>
        })

        return(
            <div className='recipes-wrapper'>
                {recipeItem}

            </div>
        )
    }
};

export default RecipesPage;