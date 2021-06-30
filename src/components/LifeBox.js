import React from 'react';
import heart from '../img/life.svg';
import heart1 from '../img/life copy.svg';

const LifeBox = (props) => {

    const { maxLifeCount, failed } = props;

    return (

        new Array(maxLifeCount).fill(heart, 0, maxLifeCount - failed).fill(heart1, maxLifeCount - failed).map((el) => (

            <li>
                <img src={el} alt='' />
            </li>

        ))
    );

};
export default LifeBox;
