import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as action from './redux/action';
import GameBoard from './components/GameBoard';
import InfoGame from './components/InfoGame';
import StartMenu from './components/StartMenu';

const App = (props) => {

  const {
    score, failed, timePerMove, resetGameBoard, setStartTime, startTime, setTimerID, timerID, sizeBoard,
    maxScore, maxLifeCount, isGameOn, setGameStatus, incrementFailCounter
  } = props;

  let sizeContainer = window.innerWidth > window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9;
  let sizeInfo = sizeContainer * 0.2;
  let widthBoard = sizeContainer * 0.8;
  let sizeBoardCell = widthBoard / sizeBoard;
  window.addEventListener('resize', () => {

    sizeContainer = window.innerWidth > window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9;
    sizeInfo = sizeContainer * 0.2;
    widthBoard = sizeContainer * 0.8;
    sizeBoardCell = widthBoard / sizeBoard;

  });

  if (maxLifeCount <= failed || maxScore <= score) setGameStatus(false);

  useEffect(() => {

    if (timerID !== null) clearInterval(timerID);

    if (isGameOn && maxLifeCount > failed && maxScore > score) {

      const id = setInterval(() => {

        const timePassed = new Date().getTime() - startTime;
        if (new Date(timePassed).getSeconds() === timePerMove) {

          setStartTime();
          setTimeout(40);
          resetGameBoard();
          incrementFailCounter(1);

        }

      });

      setTimerID(id);

    }

  }, [startTime, isGameOn]);

  return (
    <div className='game-container' style={{ width: `${sizeContainer}px` }}>
      <StartMenu />
      <GameBoard sizeBoardCell={sizeBoardCell} widthBoard={widthBoard} />
      <InfoGame sizeInfo={sizeInfo} />
    </div>
  );

};

const mapStateToProps = (state) => {

  return {

    score: state.score,
    failed: state.failed,
    timerID: state.timerID,
    isGameOn: state.isGameOn,
    startTime: state.startTime,
    sizeBoard: state.sizeBoard,
    maxScore: state.maxScore,
    timePerMove: state.timePerMove,
    maxLifeCount: state.maxLifeCount

  };

};

const mapDispatchToProps = (dispatch) => {

  return {

    resetGameBoard: () => dispatch(action.resetGameBoard()),
    setTimerID: (value) => dispatch(action.setTimerID(value)),
    setStartTime: () => dispatch(action.setStartTime()),
    setGameStatus: (value) => dispatch(action.setGameStatus(value)),
    incrementFailCounter: (value) => dispatch(action.incrementFailCounter(value))

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
