import React from 'react';
import { Link } from 'react-router-dom';

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

    setId(id) {
        localStorage.setItem('selectItemId', JSON.stringify(id));
    }

    render() {
        let recipeItem = this.state.recipes.reverse().slice(0, 8).map(item => {
            return  <Link key={item[0].recipeId} className='recipe-item' onClick={() => this.setId(item[0].recipeId)} to='/stored-recipe-details'>
                        <img className='last-image' src={item[1].image} alt='Recipe' />
                        <h4>{item[0].title}</h4>
                    </Link>
        })

        return(
            <div className='last-recipes'>
                {recipeItem}

                <Link className='link' to='/recipes'>
                    <ViewButton type='button' isBtnViewAll > View All </ViewButton>
                </Link>
            </div>
        )
    }
};

export default LastRecipes;