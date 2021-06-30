import * as actionType from './action-types';

export const incrementScore = (value) => {

    return {
        type: actionType.INCREMENT_SCORE,
        payload: value
    };

};

export const decrementScore = (value) => {

    return {
        type: actionType.DECREMENT_SCORE,
        payload: value
    };

};

export const incrementTimePerMove = (value) => {

    return {
        type: actionType.INCREMENT_TIME_PER_MOVE,
        payload: value
    };

};

export const decremenTimePerMove = (value) => {

    return {
        type: actionType.DECREMENT_TIME_PER_MOVE,
        payload: value
    };

};

export const incremenFailCounter = (value) => {

    return {
        type: actionType.FAIL_COUNTER,
        payload: value
    };

};

export const setPositionGameObj = (pos, value) => {

    return {
        type: actionType.SET_POSITION,
        payload: { pos, value }
    };

};

export const resetGameBoard = (value) => {

    return {
        type: actionType.RESET_GAMEBOARD,
        payload: value
    };

};

export const setGameStatus = (value) => {

    return {
        type: actionType.IS_GAME_ON,
        payload: value
    };

};

export const setStartTime = () => {

    return {
        type: actionType.START_TIME,
        payload: new Date()
    };

};

export const setTimerID = (value) => {

    return {
        type: actionType.SET_TIMER_ID,
        payload: value
    };

};
