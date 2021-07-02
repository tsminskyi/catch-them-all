import * as actionType from './action-types';
import * as def from '../enum/defaultValue';
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

        case actionType.RESET_GAME_BOARD: {

            const currentIndexMole = state.gameField.indexOf(gameObj.mole);
            let index = null;
            while (true) {

                index = Math.floor(Math.random() * state.gameField.length);
                if (index !== currentIndexMole) break;

            }
            const newFieldValue = new Array(9).fill(gameObj.hole);
            newFieldValue[index] = gameObj.mole;
            return {

                ...state, gameField: newFieldValue

            };

        }

        case actionType.IS_GAME_ON: {

            return {

                ...state, isGameOn: action.payload

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

        case actionType.RESET_GAME_VALUE: {

            return {

                ...state,
                score: def.minScore,
                failed: def.minLife,
                timePerMove: def.timePerMove

            };

        }

        default: return state;
    }

};
export default reducer;
