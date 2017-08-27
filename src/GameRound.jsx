// @flow

import React from 'react';

import type { Player } from './types';

import PlayerScores from './GameRound/PlayerScores';
import VisibleWinnerSelector from './GameRound/VisibleWinnerSelector';

export type Props = {
  players: Array<Player>,
  scores: { [id: number]: Array<number> },
  roundOver: () => void
};

const GameRound = ({ players, scores, roundOver }: Props) =>
    <div>
        <PlayerScores players={players} scores={scores} />
        <VisibleWinnerSelector />
        <button onClick={roundOver}>Enter Score</button>
    </div>;

export default GameRound;
