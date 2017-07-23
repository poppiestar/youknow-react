// @flow

import React from 'react';

import type { Player } from './types';

import PlayerScores from './GameRound/PlayerScores';
import VisibleWinnerSelector from './GameRound/VisibleWinnerSelector';

export type Props = {
  players: Array<Player>,
  roundOver: () => void
};

const GameRound = ({ players, roundOver }: Props) =>
    <div>
        <PlayerScores players={players} />
        <VisibleWinnerSelector />
        <button onClick={roundOver}>Enter Score</button>
    </div>;

export default GameRound;
