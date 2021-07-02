import React from 'react';
import { connect } from 'react-redux';
import hole from '../img/hole.png';
import mole from '../img/mole.png';
import CellGame from './CellGame';
import gameObj from '../enum/gameObj';
import * as action from '../redux/action';

const GameBoard = (props) => {

    const {
        score, gameField, incrementScore, resetGameBoard, maxLifeCount, failed, maxScore,
        incrementFailCounter, setStartTime, decrementTimePerMove, sizeBoardCell, widthBoard
    } = props;

    const eventClick = (e) => {

        const isLifeCountEnd = maxLifeCount > failed;
        const isMaxScore = maxScore > score;
        if (isLifeCountEnd && isMaxScore) {

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

const mapStateToProps = (state) => {

    return {

        score: state.score,
        failed: state.failed,
        gameField: state.gameField,
        maxScore: state.maxScore,
        maxLifeCount: state.maxLifeCount

    };

};

const mapDispatchToProps = (dispatch) => {

    return {

        resetGameBoard: () => dispatch(action.resetGameBoard()),
        setStartTime: (value) => dispatch(action.setStartTime(value)),
        incrementScore: (value) => dispatch(action.incrementScore(value)),
        decrementTimePerMove: (value) => dispatch(action.decrementTimePerMove(value)),
        incrementFailCounter: (value) => dispatch(action.incrementFailCounter(value))

    };

};
export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
