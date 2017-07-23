// @flow

import React from 'react';
import type { Element } from 'react';

import PlayerScores from './GameRound/PlayerScores';
import VisibleWinnerSelector from './GameRound/VisibleWinnerSelector';

type Player = {
  name: string,
  scores: Array<number>
};

type GameRoundPropTypes = {
  players: Array<Player>,
  roundOver: () => void
};

const GameRound = ({ players, roundOver }: GameRoundPropTypes): Element<any> =>
  <div>
    <PlayerScores players={players} />
    <VisibleWinnerSelector />
    <button onClick={roundOver}>Enter Score</button>
  </div>;

export default GameRound;
