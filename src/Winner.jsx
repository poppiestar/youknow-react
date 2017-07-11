
import React from 'react';

const Winner = ({ winner, restartGame, resetGame }) => {
    const { name, scores } = winner;
    const score = scores.reduce( (prev, curr) => prev + curr );

    return (
        <div>
            <h1>Winner!</h1>
            <p>Congratulations!</p>
            <p><strong>{name}</strong></p>
            <p>has won the game with {score} points!</p>
            <button onClick={restartGame}>Play Again</button>
            <button onClick={resetGame}>New Players</button>
        </div>
    );
}

export default Winner;
