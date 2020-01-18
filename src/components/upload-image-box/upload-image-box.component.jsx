import React from 'react';

import './upload-image-box.styles.scss';

const UploadImageBox = (props) => (
    <button className='upload-image-box' onClick={props.onClick}>
        {props.icon}
        {props.btnText}
    </button>
)

export default UploadImageBox;