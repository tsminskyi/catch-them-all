import React from 'react';

const CellGame = (props) => {

    const { sizeBourdCell, img, id } = props;
    return (
        <li className='game-conteiner__cell'
            key={id.toString()}
            id={id}
            style={{ width: `${sizeBourdCell}px`, height: `${sizeBourdCell}px` }}>
            <img src={img} alt='' />
        </li>
    );

};
export default CellGame;
