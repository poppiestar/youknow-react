// @flow

import React from 'react';
import type { Element } from 'react';

type WinnerSelectorPropTypes = {
  players: Array<Player>,
  setWinner: (value: string) => void
};

type Player = {
  name: string,
  scores: Array<number>
};

function playersList(players: Array<Player>): Array<Element<any>> {
  return players.map((player: Player, i: number) =>
    <option key={i} value={i}>{player.name}</option>
  );
}

const WinnerSelector = ({ players, setWinner }: WinnerSelectorPropTypes): Element<any> =>
  <select onChange={(e: Event & { currentTarget: HTMLSelectElement }) => setWinner(e.currentTarget.value)}>
    <option value="">Who won?</option>
    { playersList(players) }
  </select>;

export default WinnerSelector;
