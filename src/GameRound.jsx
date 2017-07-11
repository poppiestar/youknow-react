
import React from 'react';

import PlayerScores from './PlayerScores';
import WinnerSelector from './WinnerSelector';

class GameRound extends React.Component {
    constructor (props) {
        super(props);

        this.validate = this.validate.bind(this);
        this.selectWinner = this.selectWinner.bind(this);

        this.state = {};
    }

    validate () {
        if (!this.state.winner) {
            this.setState({
                errorMessage: 'You need to select a winner to continue'
            });
        } else {
            this.props.continue(this.state.winner);
        }
    }

    selectWinner (id) {
        this.setState({
            winner: id
        });
    }

    render () {
        let errorMessage;

        if (this.state.errorMessage) {
            errorMessage = <p>{this.state.errorMessage}</p>;
        }

        return (
            <div>
                <h1>Round {this.props.round}</h1>
                {errorMessage}
                <PlayerScores players={this.props.players} />
                <WinnerSelector players={this.props.players} selectWinner={this.selectWinner} />
                <button onClick={this.validate}>Enter Score</button>
            </div>
        );
    }
}

export default GameRound;

