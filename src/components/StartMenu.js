import React from 'react';
import { connect } from 'react-redux';
import * as action from '../redux/action';

const StartMenu = (props) => {

    const {
        isGameOn, setGameStatus, resetGameBoard, setStartTime, resetGameValue,
        score, maxScore, failed, maxLifeCount
    } = props;

    const getClassName = () => {

        const baseClass = 'game-container__menu';
        if (!isGameOn) return baseClass;
        return `${baseClass} hidden`;

    };
    const resultText = () => {

        if (score >= maxScore) return 'Game over, you WIN!';
        if (failed >= maxLifeCount) return 'Game over, you LOST!';
        return '';

    };
    return (

        <div className={getClassName()}>
            <h3>{resultText()}</h3>
            <button type='button' onClick={() => {

                setGameStatus(true);
                resetGameBoard();
                setStartTime();
                resetGameValue();

            }}>Start
            </button>
        </div>
    );

};

const mapStateToProps = (state) => {

    return {

        isGameOn: state.isGameOn,
        failed: state.failed,
        maxLifeCount: state.maxLifeCount,
        maxScore: state.maxScore,
        score: state.score

    };

};
const mapDispatchToProps = (dispatch) => {

    return {

        setGameStatus: (value) => dispatch(action.setGameStatus(value)),
        resetGameBoard: () => dispatch(action.resetGameBoard()),
        setStartTime: () => dispatch(action.setStartTime()),
        resetGameValue: () => dispatch(action.resetGameValue())
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
