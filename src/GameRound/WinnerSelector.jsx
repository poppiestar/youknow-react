
import React from 'react';
import PropTypes from 'prop-types';

function playersList(players) {
    return players.map((player, i) =>
        <option key={i} value={i}>{player.name}</option>
    );
}

const WinnerSelector = ({ players, setWinner }) =>
    <select onChange={(e) => setWinner(e.target.value)}>
        <option value="">Who won?</option>
        { playersList(players) }
    </select>;

WinnerSelector.propTypes = {
  players: PropTypes.array.isRequired,
  setWinner: PropTypes.func.isRequired
};

export default WinnerSelector;
