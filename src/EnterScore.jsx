
import React from 'react';

import ScoreInput from './ScoreInput';

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

class EnterScore extends React.Component {
    constructor (props) {
        super(props);

        this.validate = this.validate.bind(this);
        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);

        this.state = {
            score: 0
        };
    }

    incrementScore (value) {
        this.setState({
            score: this.state.score + value
        });
    }

    decrementScore (value) {
        this.setState({
            score: this.state.score - value
        });
    }

    validate () {
        return false;
    }

    render () {
        const scoreInputs = CARDS.map((card, i) => {
            return (
                <ScoreInput key={i} increment={this.incrementScore} decrement={this.decrementScore} value={card.value} name={card.name} />
            );
        });

        return (
            <div>
                <h1>Enter Score</h1>
                <p>Value: {this.state.score}</p>
                {scoreInputs}
                <button onClick={this.validate}>Next Round</button>
            </div>
        );
    }
}

export default EnterScore;

