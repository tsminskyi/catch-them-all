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

    const { score, gameField } = useSelector((state) => state);
    const isGameEnd = useSelector(isGameEndSelector);

    const dispatch = useDispatch();

    const eventClick = (i) => {

        if (!isGameEnd) {

            const value = gameField[i];
            if (value === gameObj.mole) {

                dispatch(action.incrementScore(10));
                setTimersID(setTimeout(() => {

                    dispatch(action.resetGameBoard());
                    dispatch(action.setStartTime(value));

                }, 40));
                if (score % 30 === 0) dispatch(action.decrementTimePerMove(1));

            }
            if (value === gameObj.hole) {

                dispatch(action.incrementFailCounter(1));

            }

        } else if (timersID != null) {

            clearTimeout(timersID);

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
                            isCorrectClick={gameField[i] === gameObj.mole}
                            eventClick={() => eventClick(i)} />
                    );

                })
            }
        </ul>

    );

};

export default GameBoard;
