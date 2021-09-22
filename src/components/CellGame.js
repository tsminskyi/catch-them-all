import React, { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames';
import gameObj from '../enum/gameObj';
import hole from '../img/hole.png';
import mole from '../img/mole.png';

const CellGame = (props) => {

    const [active, setActive] = useState(null);
    const [isCorrectClick, setCorrectClick] = useState(null);

    const {
        sizeBoardCell, eventClick, elem
    } = props;

    const getSize = () => Math.floor((sizeBoardCell * 100) / 100);

    const classNameCell = classNames(
        'game-container__cell',
        { pass: isCorrectClick && active },
        { fail: !isCorrectClick && active }
    );

    const clickHandle = useCallback(() => {

        setActive(true);
        setCorrectClick(elem === gameObj.mole);
        eventClick();

    }, [elem]);

    useEffect(() => {

        const timeout = setTimeout(() => {

            setActive(null);
            setCorrectClick(null);

        }, 40);
        return () => clearTimeout(timeout);

    }, [active]);

    return (
        <li className={classNameCell}
            role='presentation'
            style={{ width: `${getSize()}px`, height: `${getSize()}px` }}
            onClick={clickHandle}>
            <img src={elem === gameObj.mole ? mole : hole} alt='' />
        </li>
    );

};
export default CellGame;
