// @flow

import type { Action, GoalState } from '../types';

const initialState = 300;

const goalOptions = (state: GoalState = initialState, action: Action): number => {
    switch (action.type) {
        case 'GOAL:SET':
            return parseInt(action.goal, 10);

        default:
            return state;
    }
};

export default goalOptions;
