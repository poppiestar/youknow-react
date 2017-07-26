// @flow

import type { Action, Player, PlayersState } from '../types';

function newPlayer (name: string): Player {
    return {
        name: name,
        scores: [0]
    };
}

const initialState = [
    newPlayer('Drew'),
    newPlayer('Suzy')
];

const players = (state: PlayersState = initialState, action: Action): PlayersState => {
    switch (action.type) {
        case 'PLAYERS:ADD':
            return [
                ...state,
                newPlayer(action.name)
            ];

        case 'PLAYERS:REMOVE':
            return [
                ...state.slice(0, action.id),
                ...state.slice(action.id + 1)
            ];

        case 'PLAYERS:ADD_PLAYER_SCORE':
            return [
                ...state.slice(0, action.winner),
                Object.assign({}, state[action.winner], { scores: [...state[action.winner].scores, action.score] }),
                ...state.slice(action.winner)
            ];

        default:
            return state;
    }
};

export default players;
