// @flow

import Stage from '../constants/stages';

import type { Action, GameState } from '../types';

const initialState = {
    stage: Stage.GAME_SPLASH
};

const game = (state: GameState = initialState, action: Action): GameState => {
    switch (action.type) {
        case 'GAME:SET_STAGE':
            return Object.assign({}, state, { stage: action.stage });

        case 'GAME:RESTART':
            return Object.assign({}, state, restartGame());

        case 'GAME:RESET':
            return Object.assign({}, state, resetGame());

        default:
            return state;
    }
};

const restartGame = (): GameState => ({
    stage: Stage.GAME_ROUND
});

const resetGame = (): GameState => ({
    stage: Stage.GAME_SETUP
});

export default game;
