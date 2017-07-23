// @flow

import Stage from '../constants/stages';

import type { Action, GameState } from '../types';

const defaultState = {
    stage: Stage.GAME_SETUP,
    roundScore: 0
};

const game = (state: GameState = defaultState, action: Action): GameState => {
    switch (action.type) {
        case 'SET_STAGE':
            return Object.assign({}, state, { stage: action.stage });

        case 'SET_WINNER':
            return Object.assign({}, state, { roundWinner: action.winner });

        case 'ADD_SCORE':
            return Object.assign({}, state, { roundScore: state.roundScore + action.value });

        case 'SUBTRACT_SCORE':
            return Object.assign({}, state, { oundScore: state.roundScore - action.value });

        default:
            return state;
    }
};

export default game;
