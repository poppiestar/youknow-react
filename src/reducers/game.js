
import { SET_STAGE, SET_WINNER, ADD_SCORE, SUBTRACT_SCORE, Stage } from '../actions';

const game = (state = { stage: Stage.GAME_SETUP, roundScore: 0 } , action) => {
    let newState;

    switch (action.type) {
        case SET_STAGE:
            return { ...state, stage: action.value };

        case SET_WINNER:
            return { ...state, roundWinner: action.value };

        case ADD_SCORE:
            return { ...state, roundScore: state.roundScore + action.value };

        case SUBTRACT_SCORE:
            return { ...state, roundScore: state.roundScore - action.value };

        default:
            return state;
    }
}

export default game;
