// @flow

import { combineReducers } from 'redux';

import type { State } from '../types';

import players, * as fromPlayers from './players';
import goal from './goal';
import game from './game';
import round, * as fromRound from './round';

const youKnowApp = combineReducers({
    goal,
    game,
    players,
    round
});

export default youKnowApp;

export const getPlayers = (state: State) => fromPlayers.getPlayers(state.players);
export const getWinner = (state: State) => fromRound.getWinner(state.round);
