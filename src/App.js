import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import * as action from './redux/action';
import GameBoard from './components/GameBoard';
import InfoGame from './components/InfoGame';
import StartMenu from './components/StartMenu';
import { isGameEndSelector } from './selectors/index';

const App = () => {

  const isGameEnd = useSelector(isGameEndSelector);
  const timePerMove = useSelector((state) => state.timePerMove);
  const startTime = useSelector((state) => state.startTime);
  const timerID = useSelector((state) => state.timerID);
  const isGameOn = useSelector((state) => state.isGameOn);

  const dispatch = useDispatch();
  const incrementFailCounter = (value) => dispatch(action.incrementFailCounter(value));
  const resetGameBoard = () => dispatch(action.resetGameBoard());
  const setTimerID = (value) => dispatch(action.setTimerID(value));
  const setStartTime = () => dispatch(action.setStartTime());
  const setGameStatus = (value) => dispatch(action.setGameStatus(value));

  const [sizeContainer, setSizeContainer] = useState(
    window.innerWidth > window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9
  );

  const sizeInfo = sizeContainer * 0.2;
  const widthBoard = sizeContainer * 0.8;
  const sizeBoardCell = widthBoard / 3;

  useEffect(() => {

    window.addEventListener('resize', () => {

      setSizeContainer(window.innerWidth > window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9);

    });

  }, []);

  if (isGameEnd) setGameStatus(false);

  useEffect(() => {

    if (timerID !== null) clearInterval(timerID);

    if (isGameOn) {

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

export default App;
