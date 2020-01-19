import React from 'react';

import './recipe-image.styles.scss';

const RecipeImage = (props) => (
    <img className='recipe-image' src={props.src} alt={props.alt} />
);

export default RecipeImage;