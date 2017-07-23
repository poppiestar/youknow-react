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

        default:
            return state;
    }
};

export default game;
