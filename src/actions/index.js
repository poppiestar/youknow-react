
import Stage from '../constants/stages';
import { reduceScores } from '../helpers';

export const SET_GOAL = 'SET_GOAL';
export const setGoal = (goal) => {
    return {
        type: SET_GOAL,
        value: goal
    }
}

export const ADD_PLAYER = 'ADD_PLAYER';
export const addPlayer = (name) => {
    return {
        type: ADD_PLAYER,
        value: name
    };
}

export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const removePlayer = (id) => {
    return {
        type: REMOVE_PLAYER,
        value: id
    };
}

export const START_GAME = 'START_GAME';
export const startGame = () => {
    return (dispatch, getState) => {
        const { players } = getState();

        if (players.length >= 2) {
            dispatch({
                type: SET_STAGE,
                value: Stage.GAME_ROUND
            });
        }
    };
};

export const SET_STAGE = 'SET_STAGE';
export const setStage = (stage) => {
    return {
        type: SET_STAGE,
        value: stage
    };
};

export const SET_WINNER = 'SET_WINNER';
export const setWinner = (winner) => {
    return {
        type: SET_WINNER,
        value: parseInt(winner, 10)
    }
};

export const ROUND_OVER = 'ROUND_OVER';
export const roundOver = () => {
    return (dispatch, getState) => {
        const { game } = getState();

        if (game.roundWinner) {
            dispatch(setStage(Stage.ENTER_SCORE));
        }
    };
};

export const NEXT_ROUND = 'NEXT_ROUND';
export const nextRound = () => {
    // TODO: calculate whether the winner has won
    return (dispatch, getState) => {
        const { game, players } = getState();
        const winner = players[game.roundWinner];

        dispatch(setPlayerScore(game.roundWinner, game.roundScore));


        // const winnerScore = reduceScores(winner.scores);


        return setStage(Stage.GAME_ROUND);
    };
};

export const SET_PLAYER_SCORE = 'SET_PLAYER_SCORE';
export const setPlayerScore = (winner, score) => {
    return {
        type: SET_PLAYER_SCORE,
        winner,
        score
    };
};

export const ADD_SCORE = 'ADD_SCORE';
export const addScore = (value) => {
    return {
        type: ADD_SCORE,
        value: value
    };
};

export const SUBTRACT_SCORE = 'SUBTRACT_SCORE';
export const subtractScore = (value) => {
    return {
        type: SUBTRACT_SCORE,
        value: value
    };
};
