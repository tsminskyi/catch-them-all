import * as actionType from './action-types';

export const incrementScore = (value) => {

    return {
        type: actionType.INCREMENT_SCORE,
        payload: value
    }

};

export const decrementScore = (value) => {

    return {
        type: actionType.DECREMENT_SCORE,
        payload: value
    }

};

export const setTimePerMove = (value) => {

    return {
        type: actionType.TIME_PER_MOVE,
        payload: value
    }

};

export const incremenFailCounter = (value) => {

    return {
        type: actionType.FAIL_COUNTER,
        payload: value
    }

};
