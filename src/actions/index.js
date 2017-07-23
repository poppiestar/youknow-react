// @flow

import Stage from '../constants/stages';
// import { reduceScores } from '../helpers';

import type { Action, Dispatch, GetState, ThunkAction } from '../types';

export const setGoal = (goal: number): Action => ({
    type: 'SET_GOAL',
    goal
});

export const addPlayer = (name: string): Action => ({
    type: 'ADD_PLAYER',
    name
});

export const removePlayer = (id: number): Action => ({
    type: 'REMOVE_PLAYER',
    id
});

export const startGame = (): ThunkAction => (dispatch: Dispatch, getState: GetState) => {
    const { players } = getState();

    if (players.length >= 2) {
        dispatch(setStage(Stage.GAME_ROUND));
    }
};

export const setStage = (stage: number): Action => ({
    type: 'SET_STAGE',
    stage
});

export const setWinner = (winner: number): Action => ({
    type: 'SET_WINNER',
    winner: parseInt(winner, 10)
});

export const roundOver = (): ThunkAction => (dispatch: Dispatch, getState: GetState): void => {
    const { game } = getState();

    if (game.roundWinner) {
        dispatch(setStage(Stage.ENTER_SCORE));
    }
};

// export const NEXT_ROUND = 'NEXT_ROUND';
// // TODO: calculate whether the winner has won
// export const nextRound = (): ThunkAction => (dispatch: Dispatch, getState: GetState) => {
//     // const { game, players } = getState();
//     // const winner = players[game.roundWinner];
//     // const winnerScore = reduceScores(winner.scores);
//     //
//     // // console.log(`winner is ${players[game.roundWinner].name} with ${winnerScore}`);
//     // // dispatch(setPlayerScore(game.roundWinner, game.));
//     //
//     // // if (winnerScore >)
//     // return setStage(Stage.GAME_ROUND);
// };

export const setPlayerScore = (winner: number, score: number): Action => ({
    type: 'SET_PLAYER_SCORE',
    winner,
    score
});

export const addScore = (value: number): Action => ({
    type: 'ADD_SCORE',
    value
});

export const subtractScore = (value: number): Action => ({
    type: 'SUBTRACT_SCORE',
    value
});
