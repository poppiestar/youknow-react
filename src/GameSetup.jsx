// @flow

import React from 'react';

import SetGoal from './GameSetup/SetGoal';
import EnterPlayers from './GameSetup/EnterPlayers';
// import ErrorMessage from './ErrorMessage';

export type Props = {
  startGame: () => void
};

const GameSetup = ({ startGame }: Props) =>
    <div>
        <h1>Player Entry</h1>
        <SetGoal />
        <EnterPlayers />
        <button onClick={startGame}>Start Game</button>
    </div>;

export default GameSetup;
