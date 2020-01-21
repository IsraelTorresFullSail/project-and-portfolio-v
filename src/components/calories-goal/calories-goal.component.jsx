import React from 'react';

import './calories-goal.styles.scss';

class CaloriesGoal extends React.Component {
    constructor() {
        super();

        this.state = {
            calories_daily: '',
            calories_left: ''
        }
    }

    componentDidMount() {
        let calories_daily;    
        let calories_left;                                                                                                                               // eslint-disable-next-line
        if((calories_daily = JSON.parse(localStorage.getItem('goal'))) && (calories_left = JSON.parse(localStorage.getItem('currentRecipe')))) {
            calories_daily = JSON.parse(localStorage.getItem('goal'));
            calories_left = JSON.parse(localStorage.getItem('currentRecipe'));
            this.setState({calories_daily: calories_daily, calories_left: calories_daily - calories_left[0].calories});
        }                                        
        
    }

    render() {

        return(
            <div className='calories-cont'>
                <div className='calories-box'>
                    <p>Calories daily</p>
                    <div className='calories-number'>
                        <h4>{this.state.calories_daily}</h4>
                    </div>
                </div>
                <div className='calories-box'>
                    <p>Calories left</p>
                    <div className='calories-number'>
                        <h4>{this.state.calories_left}</h4>
                    </div>
                </div>
            </div>
        )
    }
};

export default CaloriesGoal;