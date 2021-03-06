import React from 'react';

import './recipe-preview-info.scss';

import { GoFlame } from 'react-icons/go';
import { GiWheat } from 'react-icons/gi';
import{ GiFat } from 'react-icons/gi'

class RecipePreviewInfo extends React.Component {
    constructor() {
        super();

        this.state = {
            recipeInfo: []
        }
    }

    componentDidMount() {
        let recipeInfo;                                                                                                                  // eslint-disable-next-line
        if(recipeInfo = JSON.parse(localStorage.getItem('recipes'))) {
            recipeInfo = JSON.parse(localStorage.getItem('recipes'));
            this.setState({recipeInfo: recipeInfo});
        }
        
    }

    render() {
        let recipeName = '';
        let calories = '';
        let fats = '';
        let carbohydrates = '';
        for(let i = 0; i < this.state.recipeInfo.length; i++) {
            recipeName = this.state.recipeInfo[i][0].title;
            calories = this.state.recipeInfo[i][0].calories;
            fats = this.state.recipeInfo[i][0].fats.toFixed(2);
            carbohydrates = this.state.recipeInfo[i][0].carbohydrates.toFixed(2);
        }
        return(
            <div className='recipe-preview-info'>
                <h3>{recipeName}</h3>
                <div className='info-item'>
                    <GoFlame className='icon-info' />
                    <h4>{calories} kcal</h4>    
                </div>
                <div className='info-item'>
                    <GiWheat className='icon-info' />
                    <h4>{carbohydrates} g</h4>    
                </div>
                <div className='info-item'>
                    <GiFat className='icon-info' />
                    <h4>{fats} g</h4>    
                </div>
            </div>
        )
    }
};

export default RecipePreviewInfo;