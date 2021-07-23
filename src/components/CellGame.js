import React from 'react';

const CellGame = (props) => {

    const {
        sizeBoardCell, img, isActive, isCorrectClick, onClick
    } = props;

    const className = () => {

        const baseClass = 'game-container__cell';
        if (isActive) {

            if (isCorrectClick) return `${baseClass} pass`;
            return `${baseClass} fail`;

        }
        return baseClass;

    };

    return (
        <li className={className()}
            role='presentation'
            style={{ width: `${Math.floor(sizeBoardCell * 100 / 100)}px`, height: `${Math.floor(sizeBoardCell * 100 / 100)}px` }}
            onClick={onClick}>
            <img src={img} alt='' />
        </li>
    );

};
export default CellGame;
