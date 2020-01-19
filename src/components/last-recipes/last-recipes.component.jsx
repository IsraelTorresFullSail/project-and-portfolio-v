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

    render() {
        let recipeItem = this.state.recipes.slice(0, 8).map(item => {
            let key = Math.random();
            return <div key={key} className='recipe-item'>
                        <img className='last-image' src={item[1].image} alt='Recipe' />
                        <h4>{item[0].title}</h4>
                    </div>
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