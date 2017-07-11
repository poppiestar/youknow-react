
import { ADD_PLAYER, REMOVE_PLAYER } from '../actions';

function newPlayer (name) {
    return {
        name: name,
        scores: [0]
    };
}

const players = (state = [], action) => {
    switch (action.type) {
        case ADD_PLAYER:
            return [
                ...state,
                newPlayer(action.value)
            ];

        case REMOVE_PLAYER:
            return [
                ...state.slice(0, action.value),
                ...state.slice(action.value + 1)
            ];

        default:
            return state;
    }
}

export default players;
