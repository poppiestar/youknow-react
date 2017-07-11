
import React from 'react';

const WinnerSelector = ({ players, setWinner }) => (
    <select onChange={(e) => setWinner(e.target.value)}>
        <option value="">Who won?</option>
        {
            players.map((player, i) => {
                return (
                    <option key={i} value={i}>{player.name}</option>
                );
            })
        }
    </select>
);

export default WinnerSelector;
