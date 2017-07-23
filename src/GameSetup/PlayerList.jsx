// @flow

import React from 'react';

type PlayerListPropTypes = {
  players: Array<Player>,
  removePlayer: (id: number) => void
}

type Player = {
  name: string,
  scores: Array<number>
};

const PlayerList = ({ players, removePlayer }: PlayerListPropTypes) =>
    <ul>
        {
            players.map((player, i) =>
                <li key={i}>{player.name} <button onClick={() => removePlayer(i)}>remove</button></li>
            )
        }
    </ul>;

export default PlayerList;
