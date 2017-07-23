// @flow

import { combineReducers } from 'redux';

import players from './players';
import goal from './goal';
import game from './game';
import round from './round';

const youKnowApp = combineReducers({
    goal,
    game,
    players,
    round
});

export default youKnowApp;
