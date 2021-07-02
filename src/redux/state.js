import { createStore } from 'redux';
import reducer from './reducer';

const initialSate = {

    score: 0,
    failed: 0,
    timePerMove: 4,
    isGameOn: false,
    sizeBoard: 3,
    gameField: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    startTime: null,
    timerID: null,
    maxScore: 100,
    maxLifeCount: 3

};

const state = createStore(reducer, initialSate);

export default state;
