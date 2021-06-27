import * as actionType from './action-types';
import gameObj from '../enum/gameObj';

const reducer = (state, action) => {

    switch (action.type) {

        case actionType.INCREMENT_SCORE: {

            return {

                ...state, score: state.score + Number(action.payload)

            };

        }

        case actionType.DECREMENT_SCORE: {

            return {

                ...state, score: state.score - Number(action.payload)

            };

        }

        case actionType.INCREMENT_TIME_PER_MOVE: {

            return {

                ...state, timePerMove: state.timePerMove + Number(action.payload)

            };

        }

        case actionType.DECREMENT_TIME_PER_MOVE: {

            return {

                ...state, timePerMove: state.timePerMove - Number(action.payload)
            };

        }

        case actionType.FAIL_COUNTER: {

            return {

                ...state, failed: state.failed + Number(action.payload)

            };

        }

        case actionType.SET_POSITION: {

            const newfieldValue = JSON.parse(JSON.stringify(state.gameFilde));
            newfieldValue[action.payload.pos] = action.payload.value;

            return {

                ...state, gameFilde: newfieldValue

            };

        }

        case actionType.RESET_GAMEBOARD: {

            const index = Math.floor(Math.random() * state.gameFilde.length);
            const newfieldValue = new Array(9).fill(gameObj.hole);
            newfieldValue[index] = gameObj.mole;
            return {

                ...state, gameFilde: newfieldValue

            };

        }

        case actionType.TURN: {

            return {

                ...state, flag: action.payload

            };

        }

        case actionType.START_TIME: {

            return {

                ...state, startTime: action.payload

            };

        }

        case actionType.SET_TIMER_ID: {

            return {

                ...state, timerID: action.payload

            };

        }

        default: return state;
    }

};
export default reducer;
