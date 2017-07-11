
import React from 'react';

import ScoreInput from './EnterScore/ScoreInput';

const CARDS = [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" },
    { value: 7, name: "7" },
    { value: 8, name: "8" },
    { value: 9, name: "9" },
    { value: 20, name: "Action" },
    { value: 50, name: "Wild" }
];

const EnterScore = ({ winner, score, nextRound, addScore, subtractScore }) => (
    <div>
        <h1>Enter Score</h1>
        <p>Winner: {winner}</p>
        <p>Value: {score}</p>
        {
            CARDS.map((card, i) => {
                return (
                    <EnterScore.ScoreInput key={i} increment={addScore} decrement={subtractScore} value={card.value} name={card.name} />
                );
            })
        }
        <button onClick={nextRound}>Next Round</button>
    </div>
);

EnterScore.ScoreInput = ScoreInput;

export default EnterScore;
