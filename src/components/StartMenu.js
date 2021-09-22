import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../redux/action';
import ResultText from './ResultText';

const StartMenu = () => {

    const { isGameOn, isMaxScoreCount, isMaxLifeCount } = useSelector((state) => state);
    const dispatch = useDispatch();

    const click = () => {

        dispatch(action.setGameOnOff(true));
        dispatch(action.resetGameBoard());
        dispatch(action.setStartTime());
        dispatch(action.resetGameValue());

    };

    const isActive = useCallback(() => {

        if (isMaxScoreCount || isMaxLifeCount) return true;
        return false;

    }, [isMaxScoreCount, isMaxLifeCount]);
    return (

        <div className={classNames('game-container__menu', { hidden: isGameOn })}>
            <ResultText isActive={isActive} />
            <button type='button' onClick={click}>Start
            </button>
        </div>
    );

};

export default StartMenu;
