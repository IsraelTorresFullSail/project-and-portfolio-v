import React from 'react';

import './recipe.preview.styles.scss';

import ViewButton from '../view-button/view-button.component';
import RecipePreviewInfo from '../recipe-preview-info/recipe-preview-info.component';

const RecipePreview = (props) => (
    <div className='recipe-preview'>
        {props.image}

        <RecipePreviewInfo />
        <ViewButton type='button' > View Recipe </ViewButton>
    </div>
);

export default RecipePreview;