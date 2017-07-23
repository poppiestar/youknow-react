// @flow

import React from 'react';

import type { Player } from '../types';

export type Props = {
  players: Array<Player>,
  removePlayer: (id: number) => void
};

const PlayerList = ({ players, removePlayer }: Props) =>
    <ul>
        {
            players.map((player, i) =>
                <li key={i}>{player.name} <button onClick={() => removePlayer(i)}>remove</button></li>
            )
        }
    </ul>;

export default PlayerList;
