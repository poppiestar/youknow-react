
import React, { Component } from 'react';

import PlayerScores from './GameRound/PlayerScores';
import WinnerSelector from './GameRound/WinnerSelector';
import ErrorMessage from './ErrorMessage';

export default class GameRound extends Component {
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
            this.props.continue(parseInt(this.state.winner, 10));
        }
    }

    selectWinner (id) {
        this.setState({
            winner: id
        });
    }

    render () {
        return (
            <div>
                <GameRound.PlayerScores players={this.props.players} />
                <ErrorMessage message={this.state.errorMessage} />
                <GameRound.WinnerSelector players={this.props.players} selectWinner={this.selectWinner} />
                <button onClick={this.validate}>Enter Score</button>
            </div>
        );
    }
}

GameRound.PlayerScores = PlayerScores;
GameRound.WinnerSelector = WinnerSelector;
