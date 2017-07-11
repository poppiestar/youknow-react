
import React, { Component } from 'react';

import SetGoal from './GameSetup/SetGoal';
import EnterPlayers from './GameSetup/EnterPlayers';
import ErrorMessage from './ErrorMessage';

export default class GameSetup extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    validate () {
        if (this.props.players.length < 2) {
            this.setState({
                errorMessage: 'Not enough players to start the game'
            });
        } else {
            this.props.continue();
        }
    }

    render () {
        return (
            <div>
                <h1>Player Entry</h1>
                <ErrorMessage message={this.state.errorMessage} />
                <GameSetup.SetGoal goal={this.props.goal} updateGoal={this.props.updateGoal} />
                <GameSetup.EnterPlayers addPlayer={this.props.addPlayer} removePlayer={this.props.removePlayer} players={this.props.players} />
                <button onClick={this.validate.bind(this)}>Start Game</button>
            </div>
        );
    }
}

GameSetup.SetGoal = SetGoal;
GameSetup.EnterPlayers = EnterPlayers;
