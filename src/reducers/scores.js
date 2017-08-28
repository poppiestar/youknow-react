
import score from './score';

const scores = (state = {}, action) => {
    switch (action.type) {
        case 'PLAYERS:ADD':
        case 'PLAYERS:ADD_PLAYER_SCORE':
            return {
                ...state,
                [action.id]: score(state[action.id], action)
            };

        case 'GAME:RESTART':
            return Object.keys(state).reduce((newState, id) => {
                newState[id] = score(undefined, action);
                return newState;
            }, {});
            
        case 'GAME:RESET':
            return {};

        default:
            return state;
    }
};

export default scores;

export const getScores = (state) => state;
