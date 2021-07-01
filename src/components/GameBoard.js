import React from 'react';
import { connect } from 'react-redux';
import hole from '../img/hole.png';
import mole from '../img/mole.png';
import CellGame from './CellGame';
import gameObj from '../enum/gameObj';
import * as action from '../redux/action';

const GameBoard = (props) => {

    const {
        score, gameFilde, incrementScore, setPositionGameObj, resetGameBoard, maxLifeCount, failed, macsScore,
        incremenFailCounter, setStartTime, decremenTimePerMove, sizeBourdCell, widthBourd
    } = props;

    const eventClick = (e) => {

        if (maxLifeCount > failed && macsScore > score) {

            const elem = e.target.parentNode;
            const value = gameFilde[elem.id];
            if (value === gameObj.mole) {

                incrementScore(10);
                setPositionGameObj(elem.id, gameObj.hole);
                resetGameBoard();
                setStartTime();
                if (score % 30 === 0) decremenTimePerMove(1);

            }
            if (value === gameObj.hole) {

                incremenFailCounter(1);

            }
            setTimeout(40);

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
        timerID: state.timerID,
        isGameOn: state.isGameOn,
        gameFilde: state.gameFilde,
        startTime: state.startTime,
        sizeBoard: state.sizeBoard,
        macsScore: state.macsScore,
        timePerMove: state.timePerMove,
        maxLifeCount: state.maxLifeCount

    };

};

const mapDispatchToProps = (dispatch) => {

    return {

        resetGameBoard: () => dispatch(action.resetGameBoard()),
        setStartTime: (value) => dispatch(action.setStartTime(value)),
        incrementScore: (value) => dispatch(action.incrementScore(value)),
        decremenTimePerMove: (value) => dispatch(action.decremenTimePerMove(value)),
        incremenFailCounter: (value) => dispatch(action.incremenFailCounter(value)),
        setPositionGameObj: (pos, value) => dispatch(action.setPositionGameObj(pos, value))

    };

};
export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
