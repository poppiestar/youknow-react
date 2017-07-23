// @flow

import React from 'react';

import { reduceScores } from '../helpers';

type PlayerScorePropTypes = {
  players: Array<any>
};

type Player = {
  name: string,
  scores: Array<number>
};

function playersList (players: Array<Player>): Array<any> {
    return players.map((player: Player, i: number) =>
        <li key={i}>
            <p>{player.name}: {reduceScores(player.scores)}</p>
        </li>
    );
}

const PlayerScores = ({ players }: PlayerScorePropTypes) =>
    <div>
        <h2>Player Scores</h2>
        <ul>
            { playersList(players) }
        </ul>
    </div>;

export default PlayerScores;
