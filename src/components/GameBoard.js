import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import hole from '../img/hole.png';
import mole from '../img/mole.png';
import CellGame from './CellGame';
import gameObj from '../enum/gameObj';
import * as action from '../redux/action';
import { isGameEndSelector } from '../selectors/index';

const GameBoard = (props) => {

    const { sizeBoardCell, widthBoard } = props;
    const [active, setActive] = useState(null);
    const score = useSelector((state) => state.score);
    const gameField = useSelector((state) => state.gameField);
    const isGameEnd = useSelector(isGameEndSelector);

    const dispatch = useDispatch();
    const resetGameBoard = () => dispatch(action.resetGameBoard());
    const setStartTime = (value) => dispatch(action.setStartTime(value));
    const incrementScore = (value) => dispatch(action.incrementScore(value));
    const decrementTimePerMove = (value) => dispatch(action.decrementTimePerMove(value));
    const incrementFailCounter = (value) => dispatch(action.incrementFailCounter(value));

    const eventClick = (i) => {

        if (!isGameEnd) {

            const value = gameField[i];
            setActive(i);
            const id = setTimeout(() => {

                setActive(null);
                clearTimeout(id);

            }, 40);
            if (value === gameObj.mole) {

                incrementScore(10);
                const idTimeResetGameBoard = setTimeout(() => {

                    resetGameBoard();
                    setStartTime();
                    clearTimeout(idTimeResetGameBoard);

                }, 40);
                if (score % 30 === 0) decrementTimePerMove(1);

            }
            if (value === gameObj.hole) {

                incrementFailCounter(1);

            }

        }

    };

    return (

        <ul className='game-container__board'
            style={{ width: `${widthBoard}px` }}>
            {
                gameField.map((elem, i) => {

                    const img = elem === gameObj.mole ? mole : hole;
                    return (

                        <CellGame img={img} sizeBoardCell={sizeBoardCell}
                            key={i.toString()}
                            isActive={active === i}
                            isCorrectClick={gameField[i] === gameObj.mole}
                            onClick={() => eventClick(i)} />
                    );

                })
            }
        </ul>

    );

};

export default GameBoard;
