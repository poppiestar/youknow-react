
import React from 'react';

const PlayerList = ({ players, removePlayer }) => (
    <ul>
        {
            players.map((player, i) =>
                <li key={i}>{player.name} <button onClick={() => removePlayer(i)}>remove</button></li>
            )
        }
    </ul>
);

export default PlayerList;
