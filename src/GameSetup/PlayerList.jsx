// @flow

import React from 'react';

import type { Player } from '../types';

export type Props = {
  players: { [id: number]: Player },
  removePlayer: (id: number) => void
};

const PlayerList = ({ players, removePlayer }: Props) =>
    <ul>
        {
            Object.keys(players).reduce((list, playerId: number) => {
                const player = players[playerId];

                list[playerId] = <li key={player.id}>{player.name} <button onClick={() => removePlayer(player.id)}>remove</button></li>;

                return list;
            }, [])
        }
    </ul>;

export default PlayerList;
