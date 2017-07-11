
import React from 'react';

function playersList (players) {
    return players.map((player, i) => {
        const score = player.scores.reduce((prev, next) => { return prev + next });

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
    </div>

export default PlayerScores;
