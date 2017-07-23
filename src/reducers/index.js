// @flow

import { combineReducers } from 'redux';

import players from './players';
import goal from './goal';
import game from './game';

const youKnowApp = combineReducers({
    goal,
    game,
    players
});

export default youKnowApp;
