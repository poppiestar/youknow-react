
import React from 'react';

const PlayerScores = ({ players }) => (
    <div>
        <h2>Player Scores</h2>
        <ul>
            {
                players.map((player, i) => {
                    const score = player.scores.reduce((prev, next) => { return prev + next });

                    return (
                        <li key={i}>
                            <p>{player.name}: {score}</p>
                        </li>
                    );
                })
            }
        </ul>
    </div>
);

export default PlayerScores;
