import React from 'react';
import heart from '../img/life.svg';
import heartFail from '../img/life fail.svg';

const LifeBox = (props) => {

    const { maxLifeCount, failed } = props;

    return (

        new Array(maxLifeCount).fill(heart, 0, maxLifeCount - failed)
            .fill(heartFail, maxLifeCount - failed)
            .map((el, i) => (

                <li key={i.toString()}>
                    <img src={el} alt='' />
                </li>

            ))
    );

};
export default LifeBox;
