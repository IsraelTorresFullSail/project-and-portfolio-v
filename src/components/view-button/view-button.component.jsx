import React from 'react';

import './view-button.styles.scss';

const ViewButton = ({ children, isBtnViewAll, ...otherProps}) => (
    <button 
        className={`${isBtnViewAll ? 'btn-view-all': '' } view-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default ViewButton;