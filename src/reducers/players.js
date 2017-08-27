// @flow

import { combineReducers } from 'redux';
import type { AllPlayerIdsState, PlayersByIdState, Action, PlayersState } from '../types';

const player = (state, action) => {
    switch (action.type) {
        case 'PLAYERS:ADD':
            return {
                id: action.id,
                name: action.name
            };

        default:
            return state;
    }
};

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
                [action.id]: player(undefined, action)
            };

        // case 'PLAYERS:REMOVE':
        //     return [
        //         ...state.slice(0, action.id),
        //         ...state.slice(action.id + 1)
        //     ];
        
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
