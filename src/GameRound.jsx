
import React from 'react';

import PlayerScores from './GameRound/PlayerScores';
import VisibleWinnerSelector from './GameRound/VisibleWinnerSelector';

const GameRound = ({ players, roundOver }) =>
    <div>
        <GameRound.PlayerScores players={players} />
        <VisibleWinnerSelector />
        <button onClick={roundOver}>Enter Score</button>
    </div>

GameRound.PlayerScores = PlayerScores;

export default GameRound;
