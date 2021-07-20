import React from 'react';

const CellGame = (props) => {

    const {
        sizeBoardCell, img, id, isActive
    } = props;

    const getClassName = () => {
        
        const baseClass = 'game-container__cell';
        if (isActive.elem) {

            if (isActive.status) return `${baseClass} pass`;
            return `${baseClass} fail`;

        }

        return baseClass;
        
    };

    return (
        <li className={getClassName()}
            id={id}
            style={{ width: `${sizeBoardCell}px`, height: `${sizeBoardCell}px` }}>
            <img src={img} alt='' />
        </li>
    );

};
export default CellGame;
