import React from 'react';

import './form-input.styles.scss';


const FormInput = ({ handleChange, placeholder, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} placeholder={placeholder} />
    </div>
);

export default FormInput;