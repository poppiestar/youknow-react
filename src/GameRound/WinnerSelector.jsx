
import React from 'react';

function playersList(players) {
    return players.map((player, i) =>
        <option key={i} value={i}>{player.name}</option>
    );
}

const WinnerSelector = ({ players, setWinner }) =>
    <select onChange={(e) => setWinner(e.target.value)}>
        <option value="">Who won?</option>
        { playersList(players) }
    </select>

export default WinnerSelector;
