import logo from './logo.svg';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

};

const mapStateToProps = (state) => {

  return {
    score: state.score,
    failed: state.score,
    timePerMove: state.score
  };

};

const mapDispatchToProps = (dispatch) => {

  return {

    incrementScore: (value) => dispatch(action.incrementScore(value)),
    decrementScore: (value) => dispatch(action.decrementScore(value)),
    setTimePerMove: (value) => dispatch(action.setTimePerMove(value)),
    incremenFailCounter: (value) => dispatch(action.incremenFailCounter(value))

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
