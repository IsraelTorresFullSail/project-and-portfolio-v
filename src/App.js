import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import SideNav from './components/side-nav/side-nav.component'
import logo from './assets/logo.png';
import RecipeForm from './components/recipe-form/recipe-form.component';
import NutritionAnalisys from './components/nutrition-analisys/nutrition-analisys.component';
import CaloriesGoal from './components/calories-goal/calories-goal.component';

import NutritionPage from './pages/nutrition/nutrition.component';
import RecipesPage from './pages/recipes/recipes.component';
import GoalPage from './pages/goal/goal.component';
import RecipeDetails from './pages/recipe-details/recipe-details.component';
import Profile from './pages/profile/profile.component';
import Instructions from './pages/instructions/instructions.component';
import StoredRecipeDetails from './pages/stored-recipe-details/stored-recipe-details.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  render() {
    return (
      <div className='container'>
        <SideNav />
        <div className='left-side'>
          <div className='cont-nutrition'>
            <div className='brand-container'>
              <Link className='container-logo' to='/'>
                <img className='logo' src={logo} alt="Logo" />
              </Link>
              <CaloriesGoal />
            </div>
            <RecipeForm />
            <NutritionAnalisys />
          </div>
          <div className='right-side'>
            <Switch>
              <Route exact path='/' component={NutritionPage} />
              <Route path='/home' component={NutritionPage} />
              <Route path='/profile' component={Profile} />
              <Route path='/goal' component={GoalPage} />   
              <Route path='/recipes' component={RecipesPage} />
              <Route path='/recipe-details' component={RecipeDetails} />
              <Route path='/stored-recipe-details' component={StoredRecipeDetails} />
              <Route path='/instructions' component={Instructions} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
