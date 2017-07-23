// @flow

import { SET_GOAL } from '../actions';

const goalOptions = (state: number = 300, action: string) => {
    switch (action.type) {
        case 'SET_GOAL':
            return parseInt(action.goal, 10);

        default:
            return state;
    }
};

export default goalOptions;
