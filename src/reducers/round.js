// @flow

import type { Action, RoundState } from '../types';

const initialState = {
    score: 0
};

const game = (state: RoundState = initialState, action: Action): RoundState => {
    switch (action.type) {
        case 'ROUND:SET_WINNER':
            return Object.assign({}, state, { roundWinner: action.winner });

        case 'ROUND:ADD_SCORE':
            return Object.assign({}, state, { roundScore: state.score + action.value });

        case 'ROUND:SUBTRACT_SCORE':
            return Object.assign({}, state, { roundScore: state.score - action.value });

        default:
            return state;
    }
};

export default game;
