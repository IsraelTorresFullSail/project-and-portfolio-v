import React from 'react';

import ResultTile from '../result-tile/result-tile.component';
import UploadImageBox from '../upload-image-box/upload-image-box.component';
import CustomButton from '../custom-button/custom-button.component';

import { GoFlame } from 'react-icons/go';
import { MdFitnessCenter } from 'react-icons/md';
import { GiFat } from 'react-icons/gi';
import { GiWheat } from 'react-icons/gi';
import { IoMdAdd } from 'react-icons/io';
import swal from 'sweetalert';

import './nutrition-analisys.styles.scss';

class NutritionAnalisys extends React.Component {
    constructor() {
        super();

        this.state = {
            results: [],
            images: [],
            imageRecipe: []
        }
    }

    // Function to get results from Local Storage
    async componentDidMount() {
        let results;                                                                                                                  // eslint-disable-next-line
        if(results = JSON.parse(localStorage.getItem('results'))) {
            results = JSON.parse(localStorage.getItem('results'));
            this.setState({results: results});
        } 

        // Load stock images
        fetch('data/images.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
            .then( response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then ( data => {
                this.setState({images: data.images});
            })
            .catch( err => {
                console.log(err);
            })
    }

    // Funtion to save a random image for testing
    onDrop = e => {
        e.preventDefault();
        let imageRecipe;
        let images = [];
        images = [...this.state.images];

        let id = Math.floor(Math.random() * 12) + 1;

        for (let i = 0; i < images.length; i++) {
            if(images[i].id === id) {
                swal("Image info:", "Uploading a stock image for testing reason", "info");
                imageRecipe = [{image: images[i].src, imgId: images[i].id}]
            }
            
        }
        this.setState({imageRecipe: imageRecipe});
    }

    // Save recipe with image in Local storage
    saveRecipe () {
         let recipe = [];
         recipe = [...this.state.results, ...this.state.imageRecipe];

        // Save recipe on Local Storage
        // Parse any JSON previously stored in recipes
        let existingRecipes = JSON.parse(localStorage.getItem("recipes"));
        if(existingRecipes == null) existingRecipes = [];
        localStorage.setItem('currentRecipe', JSON.stringify(recipe));
        // Save all recipes back to local storage
        existingRecipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(existingRecipes));
    }

    reloadPage() {
        swal("Good job!", "Recipe saved", "success")
        .then(() => {
            window.location.reload(false);
        })
    }

    onClick = e => {
        e.preventDefault();
        this.saveRecipe();
        this.reloadPage();
    }

    render() {
        let calories = '';
        let proteins = '';
        let fats = '';
        let carbohydrates = '';
        for(let i = 0; i < this.state.results.length; i++) {
            calories = this.state.results[0].calories;
            proteins = this.state.results[0].proteins.toFixed(2);
            fats = this.state.results[0].fats.toFixed(2);
            carbohydrates = this.state.results[0].carbohydrates.toFixed(2);
        }
        return(
            <div className='nutrition-analisys'>
                <h2>
                    Nutrition Analisys:
                </h2>
                <div className='result-grid'>
                    <ResultTile icon={<GoFlame className='icon' />} result={<h3>{calories}</h3>} boxName='calories' />
                    <ResultTile icon={<MdFitnessCenter className='icon' />} result={<h3>{proteins}</h3>} boxName='proteins' />
                    <ResultTile icon={<GiFat className='icon' />} result={<h3>{fats}</h3>} boxName='fats' />
                    <ResultTile icon={<GiWheat className='icon' />} result={<h3>{carbohydrates}</h3>} boxName='carbs' />

                    <UploadImageBox icon={<IoMdAdd className='icon' />} btnText={<h3>Add Image</h3>} onClick={this.onDrop} />
                </div>
                <div className='cont-btn-submit'>
                    <CustomButton type='button' onClick={this.onClick}> Save </CustomButton>
                </div>
            </div>
        )
    }
};

export default NutritionAnalisys;