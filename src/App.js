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
  const {
    timePerMove, startTime, timerID, isGameOn, sizeBoard
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [sizeContainer, setSizeContainer] = useState(
    window.innerWidth >= window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9
  );

  const sizeInfo = sizeContainer * 0.2;
  const widthBoard = sizeContainer * 0.8;
  const sizeBoardCell = widthBoard / sizeBoard;

  useEffect(() => {

    window.addEventListener('resize', () => {

      setSizeContainer(window.innerWidth >= window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9);

    });

    return window.removeEventListener('resize', () => {

      setSizeContainer(window.innerWidth >= window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9);

    });

  }, []);

  useEffect(() => {

    if (isGameEnd) dispatch(action.setGameOnOff(false));

  }, [isGameEnd]);

  useEffect(() => {

    if (timerID !== null) clearInterval(timerID);

    if (isGameOn) {

      const id = setInterval(() => {

        const timePassed = new Date().getTime() - startTime;
        if (new Date(timePassed).getSeconds() === timePerMove) {

          dispatch(action.setStartTime());
          dispatch(action.resetGameBoard());
          dispatch(action.incrementFailCounter(1));

        }

      });

      dispatch(action.setTimerID(id));

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
