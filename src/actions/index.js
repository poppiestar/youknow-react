
import Stage from '../constants/stages';
import { reduceScores } from '../helpers';

export const SET_GOAL = 'SET_GOAL';
export const setGoal = goal => ({
    type: SET_GOAL,
    value: goal
});

export const ADD_PLAYER = 'ADD_PLAYER';
export const addPlayer = name => ({
    type: ADD_PLAYER,
    value: name
});

export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const removePlayer = id => ({
    type: REMOVE_PLAYER,
    value: id
});

export const START_GAME = 'START_GAME';
export const startGame = () => (dispatch, getState) => {
    const { players } = getState();

    if (players.length >= 2) {
        dispatch({
            type: SET_STAGE,
            value: Stage.GAME_ROUND
        });
    }
};

export const SET_STAGE = 'SET_STAGE';
export const setStage = stage => ({
    type: SET_STAGE,
    value: stage
});

export const SET_WINNER = 'SET_WINNER';
export const setWinner = winner => ({
    type: SET_WINNER,
    value: parseInt(winner, 10)
});

export const ROUND_OVER = 'ROUND_OVER';
export const roundOver = () => (dispatch, getState) => {
    const { game } = getState();

    if (game.roundWinner) {
        dispatch(setStage(Stage.ENTER_SCORE));
    }
};

export const NEXT_ROUND = 'NEXT_ROUND';
// TODO: calculate whether the winner has won
export const nextRound = () => (dispatch, getState) => {
    const { game, players } = getState();
    const winner = players[game.roundWinner];
    const winnerScore = reduceScores(winner.scores);

    // console.log(`winner is ${players[game.roundWinner].name} with ${winnerScore}`);
    // dispatch(setPlayerScore(game.roundWinner, game.));

    // if (winnerScore >)
    return setStage(Stage.GAME_ROUND);
};

export const SET_PLAYER_SCORE = 'SET_PLAYER_SCORE';
export const setPlayerScore = (winner, score) => ({
    type: SET_PLAYER_SCORE,
    winner,
    score
});

export const ADD_SCORE = 'ADD_SCORE';
export const addScore = value => ({
    type: ADD_SCORE,
    value: value
});

export const SUBTRACT_SCORE = 'SUBTRACT_SCORE';
export const subtractScore = value => ({
    type: SUBTRACT_SCORE,
    value: value
});
