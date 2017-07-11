
import { START_GAME, SET_STAGE, Stage } from '../actions';

const game = (state = { stage: Stage.SPLASH } , action) => {
    switch (action.type) {
        case START_GAME:
            console.log('start game reducer', state);
            return state;

        case SET_STAGE:
            return {
                stage: action.value
            };

        default:
            return state;
    }
}

export default game;
