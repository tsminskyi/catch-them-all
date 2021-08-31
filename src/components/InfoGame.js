import React from 'react';
import { useSelector } from 'react-redux';
import LifeBox from './LifeBox';

const InfoGame = (props) => {

    const { sizeInfo } = props;
    const data = useSelector((state) => {

        return {
            score: state.score,
            maxScore: state.maxScore,
            failed: state.failed,
            maxLifeCount: state.maxLifeCount
        };

    });

    return (

        <ul className='game-container__info' style={{ width: `${sizeInfo}px` }}>
            <li><h1>Score:</h1></li>
            <li>{data.score} / {data.maxScore}</li>
            <li><h1>Life:</h1></li>
            <LifeBox failed={data.failed} maxLifeCount={data.maxLifeCount} />
        </ul>
    );

};

export default InfoGame;
