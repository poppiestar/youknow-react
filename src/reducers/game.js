
import { SET_STAGE, SET_WINNER, ADD_SCORE, SUBTRACT_SCORE } from '../actions';
import Stage from '../constants/stages';

const game = (state = { stage: Stage.GAME_SETUP, roundScore: 0 } , action) => {
    let newState;

    switch (action.type) {
        case SET_STAGE:
            return Object.assign({}, state, { stage: action.value });

        case SET_WINNER:
            return Object.assign({}, state, { roundWinner: action.value });

        case ADD_SCORE:
            return Object.assign({}, state, { roundScore: state.roundScore + action.value });

        case SUBTRACT_SCORE:
            return Object.assign({}, state, { oundScore: state.roundScore - action.value });

        default:
            return state;
    }
}

export default game;
