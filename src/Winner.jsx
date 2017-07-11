
import React, { Component } from 'react';

class Winner extends Component {
    render () {
        const name = this.props.winner.name;
        const score = this.props.winner.scores.reduce( (prev, curr) => prev + curr );

        return (
            <div>
                <h1>Winner!</h1>
                <p>Congratulations!</p>
                <p><strong>{name}</strong></p>
                <p>has won the game with {score} points!</p>
                <button onClick={this.props.restartGame}>Play Again</button>
                <button onClick={this.props.resetGame}>New Players</button>
            </div>
        );
    }
}

export default Winner;
