import React from 'react';
import { useSelector } from 'react-redux';
import { isMaxLifeCountSelector, isMaxScoreSelector } from '../selectors/index';

const ResultText = (props) => {

    const { isActive } = props;
    const isMaxLifeCount = useSelector(isMaxLifeCountSelector);
    const isMaxScoreCount = useSelector(isMaxScoreSelector);

    if (isActive) {

        if (isMaxScoreCount) return <h3>Game over, you WIN!</h3>;
        if (isMaxLifeCount) return <h3>Game over, you LOST!</h3>;

    }
    return <h3> </h3>;

};
export default ResultText;
