import React from 'react';

import './result-tile.styles.scss';

const ResultTile = (props) => (
    <div className='result-tile'>
        {props.icon} {props.result} {props.boxName}
    </div>
)

export default ResultTile;