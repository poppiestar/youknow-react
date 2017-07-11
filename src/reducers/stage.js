
const Stage = {
    SPLASH: 1,
    GAME_SETUP: 2,
    GAME_ROUND: 3,
    ENTER_SCORE: 4,
    WINNER: 5
};

const gameStage = (state = Stage.GAME_SETUP, action) => {
    switch (action.type) {
        case 'SET_STAGE':
            return action.value;

        default:
            return state;
    }
}

export default gameStage;
