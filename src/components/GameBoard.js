import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import hole from '../img/hole.png';
import mole from '../img/mole.png';
import CellGame from './CellGame';
import gameObj from '../enum/gameObj';
import * as action from '../redux/action';
import { isGameEndSelector } from '../selectors/index';

const GameBoard = (props) => {

    const { sizeBoardCell, widthBoard } = props;

    const score = useSelector((state) => state.score);
    const gameField = useSelector((state) => state.gameField);
    const isGameEnd = useSelector(isGameEndSelector);

    const dispatch = useDispatch();
    const resetGameBoard = () => dispatch(action.resetGameBoard());
    const setStartTime = (value) => dispatch(action.setStartTime(value));
    const incrementScore = (value) => dispatch(action.incrementScore(value));
    const decrementTimePerMove = (value) => dispatch(action.decrementTimePerMove(value));
    const incrementFailCounter = (value) => dispatch(action.incrementFailCounter(value));

    const eventClick = (e) => {

        if (!isGameEnd) {

            const elem = e.target.parentNode;
            const value = gameField[elem.id];
            if (value === gameObj.mole) {

                incrementScore(10);
                e.target.classList.add('pass');
                setTimeout(() => {

                    resetGameBoard();
                    setStartTime();
                    e.target.classList.remove('pass');

                }, 40);
                if (score % 30 === 0) decrementTimePerMove(1);

            }
            if (value === gameObj.hole) {

                incrementFailCounter(1);
                e.target.classList.add('fail');
                setTimeout(() => e.target.classList.remove('fail'), 40);

            }

        }

    };

    return (

        <ul className='game-container__board'
            style={{ width: `${widthBoard}px` }}
            onClick={(e) => eventClick(e)}
            role='presentation'>
            {
                gameField.map((elem, i) => {

                    const img = elem === gameObj.mole ? mole : hole;
                    const key = `id${i}`;
                    return (
                        <CellGame img={img} sizeBoardCell={sizeBoardCell}
                            id={i} key={key} />
                    );

                })
            }
        </ul>

    );

};

export default GameBoard;
