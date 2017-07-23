// @flow

import type { Action, Player, PlayersState } from '../types';

function newPlayer (name: string): Player {
    return {
        name: name,
        scores: [0]
    };
}

const players = (state: PlayersState = [], action: Action): PlayersState => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [
                ...state,
                newPlayer(action.name)
            ];

        case 'REMOVE_PLAYER':
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];

        // case 'SET_PLAYER_SCORE':
        // // TODO This doesn't do what it's supposed to, obvs
        //     return [
        //         ...state.slice(0, action.id),
        //         ...state.slice(action.id + 1)
        //     ];

        default:
            return state;
    }
};

export default players;
