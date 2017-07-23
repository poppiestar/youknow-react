// @flow

import type { Action } from '../types';

const goalOptions = (state: number = 300, action: Action): number => {
    switch (action.type) {
        case 'SET_GOAL':
            return parseInt(action.goal, 10);

        default:
            return state;
    }
};

export default goalOptions;
