// @flow

import { combineReducers } from 'redux';
import type { AllPlayerIdsState, PlayersByIdState, Action, Player, PlayersState } from '../types';

function newPlayer (name: string): Player {
    return {
        name: name,
        scores: [0]
    };
}

const allIds = (state: AllPlayerIdsState = [], action): AllPlayerIdsState => {
    switch (action.type) {
        case 'PLAYERS:ADD':
            return [...state, action.id];
        
        case 'GAME:RESET':
            return [];

        default:
            return state;
    }
};

const byId = (state: PlayersByIdState = {}, action: Action): PlayersByIdState => {
    switch (action.type) {
        // case 'GAME:RESTART':
        //     return state.map(player => newPlayer(player.name));

        case 'GAME:RESET':
            return {};

        case 'PLAYERS:ADD':
            return {
                ...state,
                [action.id]: newPlayer(action.name)
            };

        // case 'PLAYERS:REMOVE':
        //     return [
        //         ...state.slice(0, action.id),
        //         ...state.slice(action.id + 1)
        //     ];
        // 
        // case 'PLAYERS:ADD_PLAYER_SCORE':
        //     return state.map((player, i) => {
        //         if (i === action.winner) {
        //             const updatedPlayer = newPlayer(player.name);
        //             updatedPlayer.scores = player.scores.concat(action.score);
        // 
        //             return updatedPlayer;
        //         } else {
        //             return player;
        //         }
        //     });

        default:
            return state;
    }
};

export const getPlayers = (state: PlayersState) => state.allIds.map(id => state.byId[id]);

const players = combineReducers({
    allIds,
    byId
});

export default players;
