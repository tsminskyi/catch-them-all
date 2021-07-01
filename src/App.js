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
    macsScore, maxLifeCount, isGameOn, setGameStatus, incremenFailCounter
  } = props;
  const sizeConteiner = window.innerWidth > window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9;
  const sizeInfo = sizeConteiner * 0.2;
  const widthBourd = sizeConteiner * 0.8;
  const sizeBourdCell = widthBourd / sizeBoard;

  if (maxLifeCount <= failed || macsScore <= score) setGameStatus(false);

  useEffect(() => {

    if (timerID !== null) clearInterval(timerID);

    if (isGameOn && maxLifeCount > failed && macsScore > score) {

      const id = setInterval(() => {

        const timePassed = new Date().getTime() - startTime;
        if (new Date(timePassed).getSeconds() === timePerMove) {

          setStartTime();
          setTimeout(40);
          resetGameBoard();
          incremenFailCounter(1);

        }

      });

      setTimerID(id);

    }

  }, [startTime, isGameOn]);

  return (
    <div className='game-conteiner' style={{ width: `${sizeConteiner}px` }}>
      <StartMenu />
      <GameBoard sizeBourdCell={sizeBourdCell} widthBourd={widthBourd} />
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
    macsScore: state.macsScore,
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
    incremenFailCounter: (value) => dispatch(action.incremenFailCounter(value))

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
