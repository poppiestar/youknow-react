
import { SET_GOAL } from '../actions';

const goalOptions = (state = 300, action) => {
    switch (action.type) {
    case SET_GOAL:
        return parseInt(action.value, 10);

    default:
        return state;
    }
};

export default goalOptions;
