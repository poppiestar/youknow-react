// @flow

import React from 'react';

import type { Player } from '../types';

type PlayerListPropTypes = {
  players: Array<Player>,
  removePlayer: (id: number) => void
}

const PlayerList = ({ players, removePlayer }: PlayerListPropTypes) =>
    <ul>
        {
            players.map((player, i) =>
                <li key={i}>{player.name} <button onClick={() => removePlayer(i)}>remove</button></li>
            )
        }
    </ul>;

export default PlayerList;
