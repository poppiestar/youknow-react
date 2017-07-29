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
        case 'GAME:RESTART':
            return state.map(player => newPlayer(player.name));

        case 'GAME:RESET':
            return initialState;

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
            return state.map((player, i) => {
                if (i === action.winner) {
                    const updatedPlayer = newPlayer(player.name);
                    updatedPlayer.scores = player.scores.concat(action.score);

                    return updatedPlayer;
                } else {
                    return player;
                }
            });

        default:
            return state;
    }
};

export default players;
