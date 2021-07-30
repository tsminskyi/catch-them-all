import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../redux/action';
import { isMaxLifeCountSelector, isMaxScoreSelector } from '../selectors/index';

const StartMenu = () => {

    const isGameOn = useSelector((state) => state.isGameOn);
    const isMaxLifeCount = useSelector(isMaxLifeCountSelector);
    const isMaxScoreCount = useSelector(isMaxScoreSelector);

    const dispatch = useDispatch();
    const setGameOnOff = (value) => dispatch(action.setGameOnOff(value));
    const resetGameBoard = () => dispatch(action.resetGameBoard());
    const setStartTime = () => dispatch(action.setStartTime());
    const resetGameValue = () => dispatch(action.resetGameValue());

    const className = classNames('game-container__menu', { hidden: isGameOn });
    const resultText = () => {

        if (isMaxScoreCount) return 'Game over, you WIN!';
        if (isMaxLifeCount) return 'Game over, you LOST!';
        return '';

    };

    return (

        <div className={className}>
            <h3>{resultText()}</h3>
            <button type='button' onClick={() => {

                setGameOnOff(true);
                resetGameBoard();
                setStartTime();
                resetGameValue();

            }}>Start
            </button>
        </div>
    );

};

export default StartMenu;
