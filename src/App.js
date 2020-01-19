import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import SideNav from './components/side-nav/side-nav.component'
import logo from './assets/logo.png';
import RecipeForm from './components/recipe-form/recipe-form.component';
import NutritionAnalisys from './components/nutrition-analisys/nutrition-analisys.component';
import RecipePreview from './components/recipe-preview/recipe-preview.component';
import RecipeImage from './components/recipe-image/recipe-image.component';
import LastRecipes from './components/last-recipes/last-recipes.component';

class App extends React.Component {
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
    } else {
        alert('Store empty. Please start filling the form.')
    }
  }

  render() {
    let recipeImage = '';
    for(let i = 0; i < this.state.recipes.length; i++) {
      recipeImage = this.state.recipes[1].image;
    }
    return (
      <div className='container'>
        <SideNav />
        <div className='left-side'>
          <div className='cont-nutrition'>
            <RecipeForm />
            <NutritionAnalisys />
          </div>
          <div className='right-side'>
            <div className='container-logo'>
              <img className='logo' src={logo} alt="Logo" />
            </div>
            <RecipePreview 
              image={<RecipeImage src={recipeImage}
              alt='Recipe Picture' />}
            >
            </RecipePreview>
            <LastRecipes />
            <Switch>
              <Route exact path='/' />
              <Route path='/goal' />
              <Route path='/nutrition' />
              <Route path='/recipes' />
              <Route path='/instructions' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
