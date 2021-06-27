import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import hole from './img/hole.png';
import mole from './img/mole.png';
import './App.css';
import * as action from './redux/action';
import CellGame from './components/CellGame';
import gameObj from './enum/gameObj';

const App = (props) => {

  const {
    score, failed, timePerMove, gameFilde, incrementScore, setPositionGameObj, resetGameBoard,
    incremenFailCounter, setStartTime, startTime, setTimerID, timerID, decremenTimePerMove
  } = props;
  const sizeConteiner = window.innerWidth > window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9;
  const sizeInfo = sizeConteiner * 0.2;
  const sizeBourd = sizeConteiner * 0.8;
  const sizeBourdCell = sizeBourd / 3;

  const eventClick = (e) => {

    const value = gameFilde[e.target.parentNode.id];
    if (value === gameObj.mole) {

      incrementScore(10);
      setPositionGameObj(e.target.parentNode.id, gameObj.hole);
      resetGameBoard();
      setStartTime();
      if (score % 30 === 0) decremenTimePerMove(1);

    }
    if (value === gameObj.hole) {

      incremenFailCounter(1);
      resetGameBoard();
      setStartTime();

    }

  };

  useEffect(() => {

    clearInterval(timerID);

    const id = setInterval(() => {

      const timePassed = new Date().getTime() - startTime;
      if (new Date(timePassed).getSeconds() === timePerMove) {

        setStartTime();
        resetGameBoard();

      }

    }, 1000);

    setTimerID(id);

  }, [startTime]);

  return (
    <div className='game-conteiner' style={{ width: `${sizeConteiner}px` }}>
      <ul className='game-conteiner__bourd'
        style={{ width: `${sizeBourd}px` }}
        onClick={(e) => eventClick(e)}
        role='presentation'>
        {
          gameFilde.map((elem, i) => {

            const img = elem === 1 ? mole : hole;
            return (
              <CellGame img={img} sizeBourdCell={sizeBourdCell} id={i} />
            );

          })
        }
      </ul>
      <ul className='game-conteiner__info' style={{ width: `${sizeInfo}px` }}>
        <li>{score} / 100</li>
        <li>{failed} / 3</li>
        <li>{timePerMove}</li>
      </ul>
    </div>
  );

};

const mapStateToProps = (state) => {

  return {
    score: state.score,
    failed: state.failed,
    timePerMove: state.timePerMove,
    gameFilde: state.gameFilde,
    flag: state.flag,
    startTime: state.startTime,
    timerID: state.timerID
  };

};

const mapDispatchToProps = (dispatch) => {

  return {

    incrementScore: (value) => dispatch(action.incrementScore(value)),
    decrementScore: (value) => dispatch(action.decrementScore(value)),
    decremenTimePerMove: (value) => dispatch(action.decremenTimePerMove(value)),
    incremenFailCounter: (value) => dispatch(action.incremenFailCounter(value)),
    setPositionGameObj: (pos, value) => dispatch(action.setPositionGameObj(pos, value)),
    resetGameBoard: () => dispatch(action.resetGameBoard()),
    turn: (value) => dispatch(action.turn(value)),
    setStartTime: (value) => dispatch(action.setStartTime(value)),
    setTimerID: (value) => dispatch(action.setTimerID(value))
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
