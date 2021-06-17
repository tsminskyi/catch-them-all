import { createStore } from 'redux';
import reducer from './reducer';
import initialSate from './initialState';

const initialSate = {

    score: 0,
    failed: 0,
    timePerMove: 4000

};

const state = createStore(reducer, initialSate);

export default state;
