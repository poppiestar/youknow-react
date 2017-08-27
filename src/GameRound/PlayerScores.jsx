// @flow

import React from 'react';

import type { Player } from '../types';

import { reduceScores } from '../helpers';

type PlayerScorePropTypes = {
  players: Array<Player>,
  scores: { [id: number]: Array<number> }
};

const playersList = (players: Array<Player>, scores: { [id: number]: Array<number> }): Array<any> =>
    players.map((player: Player, i: number) =>
        <li key={i}>
            <p>{player.name}: {reduceScores(scores[i])}</p>
        </li>
    );

const PlayerScores = ({ players, scores }: PlayerScorePropTypes) =>
    <div>
        <h2>Player Scores</h2>
        <ul>
            { playersList(players, scores) }
        </ul>
    </div>;

export default PlayerScores;
