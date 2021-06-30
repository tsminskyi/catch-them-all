import React from 'react';
import { connect } from 'react-redux';
import * as action from '../redux/action';

const StartMenu = (props) => {

    const {
        isGameOn, setGameStatus, resetGameBoard, setStartTime
    } = props;

    const getClassName = () => {

        const baseClass = 'game-conteiner__menu';
        if (!isGameOn) return baseClass;
        return `${baseClass} hidden`;

    };
    return (

        <div className={getClassName()}>
            <button type='button' onClick={() => {

                setGameStatus(true);
                resetGameBoard();
                setStartTime();

            }}>Start
            </button>
        </div>
    );

};

const mapStateToProps = (state) => {

    return {

        isGameOn: state.isGameOn

    };

};
const mapDispatchToProps = (dispatch) => {

    return {

        setGameStatus: (value) => dispatch(action.setGameStatus(value)),
        resetGameBoard: () => dispatch(action.resetGameBoard()),
        setStartTime: () => dispatch(action.setStartTime())

    };

};

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
