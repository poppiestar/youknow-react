// @flow

import { combineReducers } from 'redux';

import type { State } from '../types';

import players, * as fromPlayers from './players';
import goal, * as fromGoal from './goal';
import game, * as fromGame from './game';
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
export const getRoundScore = (state: State) => fromRound.getRoundScore(state.round);
export const getGoal = (state: State) => fromGoal.getGoal(state.goal);
export const getGame = (state: State) => fromGame.getGame(state.game);
