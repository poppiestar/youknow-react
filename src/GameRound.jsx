
import React from 'react';
import PropTypes from 'prop-types';

import PlayerScores from './GameRound/PlayerScores';
import VisibleWinnerSelector from './GameRound/VisibleWinnerSelector';

const GameRound = ({ players, roundOver }) =>
    <div>
        <GameRound.PlayerScores players={players} />
        <VisibleWinnerSelector />
        <button onClick={roundOver}>Enter Score</button>
    </div>;

GameRound.PlayerScores = PlayerScores;

GameRound.propTypes = {
  players: PropTypes.array.isRequired,
  roundOver: PropTypes.func.isRequired
};

export default GameRound;
