import React from 'react';
import { connect } from 'react-redux';
import LifeBox from './LifeBox';

const InfoGame = (props) => {

    const {
        score, failed,
        macsScore, maxLifeCount, sizeInfo
    } = props;

    return (

        <ul className='game-conteiner__info' style={{ width: `${sizeInfo}px` }}>
            <li><h1>Score:</h1></li>
            <li>{score} / {macsScore}</li>
            <li><h1>Life:</h1></li>
            <LifeBox failed={failed} maxLifeCount={maxLifeCount} />
        </ul>
    );

};
const mapStateToProps = (state) => {

    return {

        score: state.score,
        failed: state.failed,
        macsScore: state.macsScore,
        maxLifeCount: state.maxLifeCount

    };

};
export default connect(mapStateToProps)(InfoGame);
