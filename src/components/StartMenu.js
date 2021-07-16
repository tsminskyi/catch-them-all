import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../redux/action';
import { isMaxLifeCountSelector, isMaxScoreSelector } from '../selectors/index';

const StartMenu = () => {

    const isGameOn = useSelector((state) => state.isGameOn);
    const isMaxLifeCount = useSelector(isMaxLifeCountSelector);
    const isMaxScoreCount = useSelector(isMaxScoreSelector);

    const dispatch = useDispatch();
    const setGameStatus = (value) => dispatch(action.setGameStatus(value));
    const resetGameBoard = () => dispatch(action.resetGameBoard());
    const setStartTime = () => dispatch(action.setStartTime());
    const resetGameValue = () => dispatch(action.resetGameValue());

    const getClassName = () => {

        const baseClass = 'game-container__menu';
        if (!isGameOn) return baseClass;
        return `${baseClass} hidden`;

    };
    const resultText = () => {

        if (isMaxScoreCount) return 'Game over, you WIN!';
        if (isMaxLifeCount) return 'Game over, you LOST!';
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

export default StartMenu;
