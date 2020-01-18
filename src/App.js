import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import SideNav from './components/side-nav/side-nav.component'
import logo from './assets/logo.png';
import RecipeForm from './components/recipe-form/recipe-form.component';
import NutritionAnalisys from './components/nutrition-analisys/nutrition-analisys.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
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
