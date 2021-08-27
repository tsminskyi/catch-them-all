import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const CellGame = (props) => {

    const [active, setActive] = useState(null);

    const {
        sizeBoardCell, img, isCorrectClick, onClick
    } = props;

    const getSize = () => Math.floor((sizeBoardCell * 100) / 100);

    const classNameCell = classNames(
        'game-container__cell',
        { pass: isCorrectClick && active },
        { fail: !isCorrectClick && active }
    );

    const clickHandle = () => {

        setActive(true);
        onClick();

    };

    useEffect(() => {

        const timeout = setTimeout(() => setActive(null), 40);
        return () => clearTimeout(timeout);

    }, [active]);

    return (
        <li className={classNameCell}
            role='presentation'
            style={{ width: `${getSize()}px`, height: `${getSize()}px` }}
            onClick={clickHandle}>
            <img src={img} alt='' />
        </li>
    );

};
export default CellGame;
