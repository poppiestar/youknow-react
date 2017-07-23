// @flow

import React from 'react';

import SetGoal from './GameSetup/SetGoal';
import EnterPlayers from './GameSetup/EnterPlayers';
// import ErrorMessage from './ErrorMessage';

type GameSetupPropTypes = {
  startGame: () => void
};

const GameSetup = ({ startGame }: GameSetupPropTypes) =>
    <div>
        <h1>Player Entry</h1>
        <SetGoal />
        <EnterPlayers />
        <button onClick={startGame}>Start Game</button>
    </div>;

export default GameSetup;
