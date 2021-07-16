import React, {
  useEffect, useState, useSelector, useDispatch, useCallback
} from 'react';
import './App.css';
import * as action from './redux/action';
import GameBoard from './components/GameBoard';
import InfoGame from './components/InfoGame';
import StartMenu from './components/StartMenu';

const App = () => {

  // const {
  //   score, failed, timePerMove, resetGameBoard, setStartTime, startTime, setTimerID, timerID, sizeBoard,
  //   maxScore, maxLifeCount, isGameOn, setGameStatus, incrementFailCounter
  // } = props;

  const score = useSelector((state) => state.score);
  const failed = useSelector((state) => state.failed);
  const timePerMove = useSelector((state) => state.timePerMove);
  const startTime = useSelector((state) => state.startTime);
  const timerID = useSelector((state) => state.timerID);
  const sizeBoard = useSelector((state) => state.sizeBoard);
  const maxScore = useSelector((state) => state.maxScore);
  const maxLifeCount = useSelector((state) => state.maxLifeCount);
  const isGameOn = useSelector((state) => state.isGameOn);

  const dispatch = useDispatch();
  const incrementFailCounter = useCallback(
    (value) => dispatch(action.incrementFailCounter(value)),
    [dispatch]
  );
  const resetGameBoard = useCallback(
    () => dispatch(action.resetGameBoard()),
    [dispatch]
  );
  const setTimerID = useCallback(
    (value) => dispatch(action.setTimerID(value)),
    [dispatch]
  );
  const setStartTime = useCallback(
    () => dispatch(action.setStartTime()),
    [dispatch]
  );
  const setGameStatus = useCallback(
    (value) => dispatch(action.setGameStatus(value)),
    [dispatch]
  );

  const [sizeContainer, setSizeContainer] = useState(
    window.innerWidth > window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9
  );

  const sizeInfo = sizeContainer * 0.2;
  const widthBoard = sizeContainer * 0.8;
  const sizeBoardCell = widthBoard / sizeBoard;

  useEffect(() => {

    window.addEventListener('resize', () => {

      setSizeContainer(window.innerWidth > window.innerHeight ? window.innerHeight * 0.9 : window.innerWidth * 0.9);

    });

  }, []);

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

// const mapStateToProps = (state) => {

//   return {

//     score: state.score,
//     failed: state.failed,
//     timerID: state.timerID,
//     isGameOn: state.isGameOn,
//     startTime: state.startTime,
//     sizeBoard: state.sizeBoard,
//     maxScore: state.maxScore,
//     timePerMove: state.timePerMove,
//     maxLifeCount: state.maxLifeCount

//   };

// };

// const mapDispatchToProps = (dispatch) => {

//   return {

//     resetGameBoard: () => dispatch(action.resetGameBoard()),
//     setTimerID: (value) => dispatch(action.setTimerID(value)),
//     setStartTime: () => dispatch(action.setStartTime()),
//     setGameStatus: (value) => dispatch(action.setGameStatus(value)),
//     incrementFailCounter: (value) => dispatch(action.incrementFailCounter(value))

//   };

// };

export default App;
