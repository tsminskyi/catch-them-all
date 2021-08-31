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
    const [timersID, setTimersID] = useState(null);

    const data = useSelector((state) => {

        return {
            score: state.score,
            gameField: state.gameField
        };

    });
    const isGameEnd = useSelector(isGameEndSelector);

    const dispatch = useDispatch();
    const resetGameBoard = () => dispatch(action.resetGameBoard());
    const setStartTime = (value) => dispatch(action.setStartTime(value));
    const incrementScore = (value) => dispatch(action.incrementScore(value));
    const decrementTimePerMove = (value) => dispatch(action.decrementTimePerMove(value));
    const incrementFailCounter = (value) => dispatch(action.incrementFailCounter(value));

    const eventClick = (i) => {

        if (!isGameEnd) {

            const value = data.gameField[i];
            if (value === gameObj.mole) {

                incrementScore(10);
                setTimersID(setTimeout(() => {

                    resetGameBoard();
                    setStartTime();

                }, 40));
                if (data.score % 30 === 0) decrementTimePerMove(1);

            }
            if (value === gameObj.hole) {

                incrementFailCounter(1);

            }

        } else if (timersID != null) {

            clearTimeout(timersID);

        }

    };

    return (

        <ul className='game-container__board'
            style={{ width: `${widthBoard}px` }}>
            {
                data.gameField.map((elem, i) => {

                    const img = elem === gameObj.mole ? mole : hole;
                    return (

                        <CellGame img={img} sizeBoardCell={sizeBoardCell}
                            key={i.toString()}
                            isCorrectClick={data.gameField[i] === gameObj.mole}
                            onClick={() => eventClick(i)} />
                    );

                })
            }
        </ul>

    );

};

export default GameBoard;
