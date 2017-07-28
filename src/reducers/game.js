// @flow

import Stage from '../constants/stages';

import type { Action, GameState } from '../types';

const initialState = {
    stage: Stage.GAME_SETUP
};

const game = (state: GameState = initialState, action: Action): GameState => {
    switch (action.type) {
        case 'GAME:SET_STAGE':
            return Object.assign({}, state, { stage: action.stage });

        case 'GAME:RESTART':
            return Object.assign({}, state, restartGame());

        case 'GAME:RESET':
            return initialState;

        default:
            return state;
    }
};

const restartGame = (): GameState => ({
    stage: Stage.GAME_ROUND
});

export default game;
