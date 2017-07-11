
import React from 'react';

import SetGoal from './GameSetup/SetGoal';
import EnterPlayers from './GameSetup/EnterPlayers';
// import ErrorMessage from './ErrorMessage';

const GameSetup = ({ startGame }) =>
    <div>
        <h1>Player Entry</h1>
        <GameSetup.SetGoal />
        <GameSetup.EnterPlayers />
        <button onClick={startGame}>Start Game</button>
    </div>

GameSetup.SetGoal = SetGoal;
GameSetup.EnterPlayers = EnterPlayers;

export default GameSetup;
