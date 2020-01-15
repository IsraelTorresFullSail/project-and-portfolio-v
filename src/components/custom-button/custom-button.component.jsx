import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isBtnAdd, ...otherProps}) => (
    <button 
        className={`${isBtnAdd ? 'btn-add': '' } custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;