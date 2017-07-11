
import React from 'react';

class PlayerScores extends React.Component {
    render () {
        const players = this.props.players.map((player, i) => {
            const scores = player.scores.map((score, j) => {
                return (
                    <li key={j}>
                        {score}
                    </li>
                );
            });

            return (
                <li key={i}>
                    <p>{player.name}</p>
                    <ul>
                        {scores}
                    </ul>
                </li>
            );
        });

        return (
            <div>
                <h2>Player Scores</h2>
                <ul>
                    {players}
                </ul>
            </div>
        );
    }
}

export default PlayerScores;

