
import React from 'react';
import PropTypes from 'prop-types';

import { reduceScores } from './helpers';

function playersList (players) {
    return players.map((player, i) => {
        const score = reduceScores(player.scores);

        return (
            <li key={i}>
                <p>{player.name}: {score}</p>
            </li>
        );
    });
}

const PlayerScores = ({ players }) =>
    <div>
        <h2>Player Scores</h2>
        <ul>
            { playersList(players) }
        </ul>
    </div>;

PlayerScores.propTypes = {
  players: PropTypes.array.isRequired
};

export default PlayerScores;
