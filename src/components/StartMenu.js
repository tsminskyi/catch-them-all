import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../redux/action';
import ResultText from './ResultText';

const StartMenu = () => {

    const { isGameOn, isMaxScoreCount, isMaxLifeCount } = useSelector((state) => state);
    const dispatch = useDispatch();

    const className = classNames('game-container__menu', { hidden: isGameOn });

    const click = useCallback(() => {

        dispatch(action.setGameOnOff(true));
        dispatch(action.resetGameBoard());
        dispatch(action.setStartTime());
        dispatch(action.resetGameValue());

    }, [action.setGameOnOff,
    action.resetGameBoard,
    action.setStartTime,
    action.resetGameValue]);

    const isActive = useCallback(() => {

        if (isMaxScoreCount || isMaxLifeCount) return true;
        return false;

    });
    return (

        <div className={className}>
            <ResultText isActive={isActive} />
            <button type='button' onClick={click}>Start
            </button>
        </div>
    );

};

export default StartMenu;
