// @flow

import type { Action, RoundState } from '../types';

const initialState = {
    score: 0
};

const game = (state: RoundState = initialState, action: Action): RoundState => {
    switch (action.type) {
        case 'ROUND:SET_WINNER':
            return Object.assign({}, state, { winner: action.winner });

        case 'ROUND:ADD_SCORE':
            return Object.assign({}, state, { score: state.score + action.value });

        case 'ROUND:SUBTRACT_SCORE':
            return Object.assign({}, state, { score: state.score - action.value });

        case 'GAME:RESTART':
        case 'GAME:RESET':
            return initialState;

        default:
            return state;
    }
};

export default game;
