import React from 'react';
import { Link } from 'react-router-dom';

import './recipe.preview.styles.scss';

import ViewButton from '../view-button/view-button.component';
import RecipePreviewInfo from '../recipe-preview-info/recipe-preview-info.component';

const RecipePreview = (props) => (
    <div className='recipe-preview'>
        {props.image}

        <RecipePreviewInfo />
        <Link className='link' to='/recipe-details'>
            <ViewButton type='button' > View Recipe </ViewButton>
        </Link>
    </div>
);

export default RecipePreview;