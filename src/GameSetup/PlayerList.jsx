
import React from 'react';
import PropTypes from 'prop-types';

const PlayerList = ({ players, removePlayer }) => (
    <ul>
        {
            players.map((player, i) =>
                <li key={i}>{player.name} <button onClick={() => removePlayer(i)}>remove</button></li>
            )
        }
    </ul>
);

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  removePlayer: PropTypes.func.isRequired
};

export default PlayerList;
