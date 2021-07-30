import React from 'react';
import classNames from 'classnames';

const CellGame = (props) => {

    const {
        sizeBoardCell, img, isActive, isCorrectClick, onClick
    } = props;

    const getSize = () => Math.floor((sizeBoardCell * 100) / 100);

    const classNameCell = classNames(
        'game-container__cell',
        { pass: isCorrectClick && isActive },
        { fail: !isCorrectClick && isActive }
    );

    return (
        <li className={classNameCell}
            role='presentation'
            style={{ width: `${getSize()}px`, height: `${getSize()}px` }}
            onClick={onClick}>
            <img src={img} alt='' />
        </li>
    );

};
export default CellGame;
