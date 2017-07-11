
import { combineReducers } from 'redux';

import players from './players';
import goal from './goal';
import stage from './stage';

const youKnowApp = combineReducers({
    goal,
    stage,
    players
});

export default youKnowApp;
