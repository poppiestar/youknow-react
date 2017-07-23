// @flow

import { ADD_PLAYER, REMOVE_PLAYER, SET_PLAYER_SCORE } from '../actions';

import type { Player } from '../types';

function newPlayer (name: string): Player {
    return {
        name: name,
        scores: [0]
    };
}

const players = (state = [], action) => {
    switch (action.type) {
    case ADD_PLAYER:
        return [
            ...state,
            newPlayer(action.value)
        ];

    case REMOVE_PLAYER:
        return [
            ...state.slice(0, action.value),
            ...state.slice(action.value + 1)
        ];

    case SET_PLAYER_SCORE:
        // TODO This doesn't do what it's supposed to, obvs
        return [
            ...state.slice(0, action.value),
            ...state.slice(action.value + 1)
        ];

    default:
        return state;
    }
};

export default players;
