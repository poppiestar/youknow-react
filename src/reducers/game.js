
import { SET_STAGE, SET_WINNER, Stage } from '../actions';

const game = (state = { stage: Stage.GAME_SETUP } , action) => {
    switch (action.type) {
        case SET_STAGE:
            return {
                stage: action.value
            };

        case SET_WINNER:
            return Object.assign({}, state, { roundWinner: action.value });

        default:
            return state;
    }
}

export default game;
