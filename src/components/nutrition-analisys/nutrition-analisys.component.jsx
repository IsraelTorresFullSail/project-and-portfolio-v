import React from 'react';

import ResultTile from '../result-tile/result-tile.component';
import UploadImageBox from '../upload-image-box/upload-image-box.component';
import CustomButton from '../custom-button/custom-button.component';

import { GoFlame } from 'react-icons/go';
import { MdFitnessCenter } from 'react-icons/md';
import { GiWaterDrop } from 'react-icons/gi';
import { GiWheat } from 'react-icons/gi';
import { IoMdAdd } from 'react-icons/io';

import './nutrition-analisys.styles.scss';

class NutritionAnalisys extends React.Component {
    constructor() {
        super();

        this.state = {
            results: [],
            image: []
        }
    }

    // Function to get results from Local Storage
    async componentDidMount() {
        let results;
        if(results = JSON.parse(localStorage.getItem('results'))) {
            results = JSON.parse(localStorage.getItem('results'));
            this.setState({results: results});
        } else {
            alert('No results on store. Please fill the form.')
        }

        fetch('../../../public/images.js', {
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
                console.log(data.images)
            })
            .catch( err => {
                console.log(err);
            })
    }

    // Funtion to save a random image for testing
    onDrop() {
        // Fetch request
        fetch('../../images.js')
            .then( response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then ( data => {
                console.log(data.images)
                let imageRecipe;
                let id = Math.floor(Math.random() * 12) + 1;

                data.images.filter(data.images.id === id).map(img => {
                    alert('Uploading a stock image for testing reason');
                    return imageRecipe = [{image: img.src, imgId: img.id}]
                });
                this.setState({
                    imageRecipe
                });
                console.log(imageRecipe);
            })
            .catch( err => {
                console.log(err);
            })
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
                    <ResultTile icon={<GiWaterDrop className='icon' />} result={<h3>{fats}</h3>} boxName='fats' />
                    <ResultTile icon={<GiWheat className='icon' />} result={<h3>{carbohydrates}</h3>} boxName='carbs' />

                    <UploadImageBox icon={<IoMdAdd className='icon' />} btnText={<h3>Add Image</h3>} onClick={this.onDrop} />
                    <button onClick={this.onDrop}>Add Img</button>
                </div>
                <div className='cont-btn-submit'>
                    <CustomButton type='button'> Save </CustomButton>
                </div>
            </div>
        )
    }
};

export default NutritionAnalisys;