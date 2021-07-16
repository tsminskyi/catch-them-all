export const isMaxScoreSelector = (state) => (state.maxScore <= state.score);

export const isMaxLifeCountSelector = (state) => (state.maxLifeCount <= state.failed);

export const isGameEndSelector = (state) => (isMaxLifeCountSelector(state) || isMaxScoreSelector(state));
