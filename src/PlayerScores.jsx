
import React, { Component } from 'react';

class PlayerScores extends Component {
    render () {
        const players = this.props.players.map((player, i) => {
            const score = player.scores.reduce((prev, next) => { return prev + next });

            return (
                <li key={i}>
                    <p>{player.name}: {score}</p>
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
