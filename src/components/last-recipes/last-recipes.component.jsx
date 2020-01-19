import React from 'react';

import './last-recipes.styles.scss';

import ViewButton from '../view-button/view-button.component';

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
        let recipeItem = this.state.recipes.map(item => {
            let key = Math.random();
            return <div key={key} className='recipe-item'>
                        <img className='last-image' src={item[1].image} alt='Recipe' />
                        <h4>{item[0].title}</h4>
                    </div>
        })

        return(
            <div className='last-recipes'>
                {recipeItem}

                <ViewButton type='button' isBtnViewAll > View All </ViewButton>
            </div>
        )
    }
};

export default LastRecipes;