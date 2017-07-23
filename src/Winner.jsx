// @flow

import React from 'react';
import type { Element } from 'react';

import { reduceScores } from './helpers';

type WinnerPropTypes = {
  winner: Player,
  restartGame: () => void,
  resetGame: () => void
};

type Player = {
  name: string,
  scores: Array<number>
};

const Winner = ({ winner, restartGame, resetGame }: WinnerPropTypes): Element<any> => {
    const { name, scores } = winner;

    return (
        <div>
            <h1>Winner!</h1>
            <p>Congratulations!</p>
            <p><strong>{name}</strong></p>
            <p>has won the game with { reduceScores(scores) } points!</p>
            <button onClick={restartGame}>Play Again</button>
            <button onClick={resetGame}>New Players</button>
        </div>
    );
};

export default Winner;
