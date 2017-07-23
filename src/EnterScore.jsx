
import React from 'react';
import PropTypes from 'prop-types';
import { reduceScores } from './helpers';

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

const EnterScore = ({ winner, nextRound, addScore, subtractScore }) =>
  <div>
    <h1>Enter Score</h1>
    <p>Winner: { winner.name }</p>
    <p>Value: { reduceScores(winner.scores) }</p>
    {
      CARDS.map((card, i) =>
        <EnterScore.ScoreInput key={i} increment={addScore} decrement={subtractScore} value={card.value} name={card.name} />
      )
    }
    <button onClick={nextRound}>Next Round</button>
  </div>;

EnterScore.ScoreInput = ScoreInput;

EnterScore.propTypes = {
  winner: PropTypes.number.isRequired,
  nextRound: PropTypes.func.isRequired,
  addScore: PropTypes.func.isRequired,
  subtractScore: PropTypes.func.isRequired
};

export default EnterScore;
