import React from 'react';

import './recipe-image.styles.scss';

const RecipeImage = (props) => (
    <div className='img-wrapper'>
        <img className='recipe-image' src={props.src} alt={props.alt} />
    </div>
);

export default RecipeImage;