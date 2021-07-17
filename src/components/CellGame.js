import React from 'react';

const CellGame = (props) => {

    const { sizeBoardCell, img, id } = props;
    return (
        <li className='game-container__cell'
            id={id}
            style={{ width: `${sizeBoardCell}px`, height: `${sizeBoardCell}px` }}>
            <img src={img} alt='' />
        </li>
    );

};
export default CellGame;
