// @flow

import React from 'react';

import type { Player } from '../types';

export type Props = {
  players: Array<Player>,
  setWinner: (value: number) => void
};

const playersList = (players: Array<Player>): Array<any> =>
    players.map((player: Player) =>
        <option key={player.id} value={player.id}>{player.name}</option>
    );

const WinnerSelector = ({ players, setWinner }: Props) =>
    <select onChange={(e: Event & { currentTarget: HTMLSelectElement }) => setWinner(parseInt(e.currentTarget.value, 10))}>
        <option value="">Who won?</option>
        { playersList(players) }
    </select>;

export default WinnerSelector;
