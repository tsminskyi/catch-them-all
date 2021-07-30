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

export const decrementTimePerMove = (value) => {

    return {
        type: actionType.DECREMENT_TIME_PER_MOVE,
        payload: value
    };

};

export const incrementFailCounter = (value) => {

    return {
        type: actionType.FAIL_COUNTER,
        payload: value
    };

};

export const resetGameBoard = (value) => {

    return {
        type: actionType.RESET_GAME_BOARD,
        payload: value
    };

};

export const setGameOnOff = (value) => {

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

export const resetGameValue = () => {

    return {
        type: actionType.RESET_GAME_VALUE
    };

};
