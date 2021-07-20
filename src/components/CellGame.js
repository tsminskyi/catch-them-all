import React, { useEffect, useState } from 'react';

const CellGame = (props) => {

    const {
        sizeBoardCell, img, id, isActive
    } = props;
    const baseClass = 'game-container__cell';
    const [className, setClassName] = useState(baseClass);

    useEffect(() => {

        console.log('sdf');
        if (isActive.elem) {

            if (isActive.status) setClassName(`${baseClass} pass`);
            setClassName(`${baseClass} fail`);

        }

        setClassName(baseClass);

    });

    return (
        <li className={className}
            id={id}
            style={{ width: `${sizeBoardCell}px`, height: `${sizeBoardCell}px` }}>
            <img src={img} alt='' />
        </li>
    );

};
export default CellGame;
