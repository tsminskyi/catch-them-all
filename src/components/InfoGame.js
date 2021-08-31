import React from 'react';
import { useSelector } from 'react-redux';
import LifeBox from './LifeBox';

const InfoGame = (props) => {

    const { sizeInfo } = props;
    const {
        score, maxScore, failed, maxLifeCount
    } = useSelector((state) => state);

    return (

        <ul className='game-container__info' style={{ width: `${sizeInfo}px` }}>
            <li><h1>Score:</h1></li>
            <li>{score} / {maxScore}</li>
            <li><h1>Life:</h1></li>
            <LifeBox failed={failed} maxLifeCount={maxLifeCount} />
        </ul>
    );

};

export default InfoGame;
