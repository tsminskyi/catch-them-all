import * as actionType from './action-types';

const reducer = (state, action) => {

    switch (action.type) {

        case actionType.INCREMENT_SCORE: {

            return {
                ...state, score: score + Number(action.payload)
            }

        }

        case actionType.DECREMENT_SCORE: {

            return {
                ...state, score: score - Number(action.payload)
            }

        }

        case actionType.TIME_PER_MOVE: {

            return {
                ...state, timePerMove: action.payload
            }

        }

        case actionType.FAIL_COUNTER: {

            return {
                ...state, failed: failed + Number(action.payload)
            }

        }

        default: return state;
    }

};
export default reducer;