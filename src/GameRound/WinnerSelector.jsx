// @flow

import React from 'react';

import type { Player } from '../types';

export type Props = {
  players: Array<Player>,
  setWinner: (value: string) => void
};

function playersList(players: Array<Player>): Array<any> {
    return players.map((player: Player, i: number) =>
        <option key={i} value={i}>{player.name}</option>
    );
}

const WinnerSelector = ({ players, setWinner }: Props) =>
    <select onChange={(e: Event & { currentTarget: HTMLSelectElement }) => setWinner(e.currentTarget.value)}>
        <option value="">Who won?</option>
        { playersList(players) }
    </select>;

export default WinnerSelector;
