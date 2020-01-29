import React from 'react';

import './instructions.styles.scss';

const Instructions = () => (
    <div className='inst-wrapper'>
                <h2>Instructions:</h2>
                <div className='inst-container'>
                    <div className='step'>
                        <h5>Step 1</h5>
                        <p>Complete the homepage form to send the recipe to be analysed.</p>
                        <p><strong>Recipe example:</strong></p>
                        <p><strong>Title:</strong> Fresh Ham Roasted</p>
                        <p><strong>Preparation:</strong> 1. Have your butcher bone and butterfly the ham and score the fat in a diamond pattern. ...</p>
                        <p><strong>Ingredients:</strong></p>
                        <p>- 1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)</p>
                        <p>- 7 cloves garlic, minced</p>
                        <p>- 1 tablespoon caraway seeds, crushed</p>
                        <p>- 4 teaspoons salt</p>
                        <p>- Freshly ground pepper to taste</p>
                        <p>- 1 teaspoon olive oil</p>
                        <p>- 1 medium onion, peeled and chopped</p>
                        <p>- 3 cups sourdough rye bread, cut into 1/2-inch cubes</p>
                        <p>- 1 1/4 cups coarsely chopped pitted prunes</p>
                        <p>- 1 1/4 cups coarsely chopped dried apricots</p>
                        <p>- 1 large tart apple, peeled, cored and cut into 1/2-inch cubes</p>
                        <p>- 2 teaspoons chopped fresh rosemary</p>
                        <p>- 1 egg, lightly beaten</p>
                        <p>- 1 cup chicken broth, homemade or low-sodium canned</p>
                        <p><strong>Note:</strong> Make sure to enter enough ingredients to have sufficient quality to analyse the recipe.</p>
                    </div>
                    <div className='step'>
                        <h5>Step 2</h5>
                        <p>Add an image to your recipe in "Nutrition Analisys" results.</p>
                    </div>
                    <div className='step'>
                        <h5>Step 3</h5>
                        <p>Save your recipe with the image added in the previous step and its nutrition result into your database.</p>
                    </div>
                    <div className='step'>
                        <h5>Step 4</h5>
                        <p>Enter in the goal section the maximum number of calories to consume and compare that value with recipe entered.</p>
                    </div>
                </div>
            </div>
);

export default Instructions;