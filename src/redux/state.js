import { createStore } from 'redux';
import reducer from './reducer';

const initialSate = {

    score: 0,
    failed: 0,
    timePerMove: 4,
    flag: true,
    gameFilde: [1, 0, 0, 0, 0, 0, 0, 0, 0],
    startTime: new Date(),
    timerID: null

};

const state = createStore(reducer, initialSate);

export default state;
