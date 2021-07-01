import React from 'react';
import { connect } from 'react-redux';
import hole from '../img/hole.png';
import mole from '../img/mole.png';
import CellGame from './CellGame';
import gameObj from '../enum/gameObj';
import * as action from '../redux/action';

const GameBoard = (props) => {

    const {
        score, gameFilde, incrementScore, resetGameBoard, maxLifeCount, failed, maxScore,
        incremenFailCounter, setStartTime, decremenTimePerMove, sizeBourdCell, widthBourd
    } = props;

    const eventClick = (e) => {

        const isLifeCountEnd = maxLifeCount > failed;
        const isMaxScore = maxScore > score;
        if (isLifeCountEnd && isMaxScore) {

            const elem = e.target.parentNode;
            const value = gameFilde[elem.id];
            if (value === gameObj.mole) {

                incrementScore(10);
                e.target.classList.add('pass');
                setTimeout(() => {

                    resetGameBoard();
                    setStartTime();
                    e.target.classList.remove('pass');

                }, 40);
                if (score % 30 === 0) decremenTimePerMove(1);

            }
            if (value === gameObj.hole) {

                incremenFailCounter(1);
                e.target.classList.add('fail');
                setTimeout(() => e.target.classList.remove('fail'), 40);

            }

        }

    };

    return (

        <ul className='game-conteiner__bourd'
            style={{ width: `${widthBourd}px` }}
            onClick={(e) => eventClick(e)}
            role='presentation'>
            {
                gameFilde.map((elem, i) => {

                    const img = elem === gameObj.mole ? mole : hole;
                    const key = `id${i}`;
                    return (
                        <CellGame img={img} sizeBourdCell={sizeBourdCell}
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
        gameFilde: state.gameFilde,
        maxScore: state.maxScore,
        maxLifeCount: state.maxLifeCount

    };

};

const mapDispatchToProps = (dispatch) => {

    return {

        resetGameBoard: () => dispatch(action.resetGameBoard()),
        setStartTime: (value) => dispatch(action.setStartTime(value)),
        incrementScore: (value) => dispatch(action.incrementScore(value)),
        decremenTimePerMove: (value) => dispatch(action.decremenTimePerMove(value)),
        incremenFailCounter: (value) => dispatch(action.incremenFailCounter(value))

    };

};
export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
