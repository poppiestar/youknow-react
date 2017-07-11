
import React from 'react';

import SetGoal from './SetGoal';
import EnterPlayers from './EnterPlayers';
import ErrorMessage from './ErrorMessage';

class GameSetup extends React.Component {
    constructor (props) {
        super(props);

        this.validate = this.validate.bind(this);

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
                <SetGoal goal={this.props.goal} updateGoal={this.props.updateGoal} />
                <EnterPlayers addPlayer={this.props.addPlayer} removePlayer={this.props.removePlayer} players={this.props.players} />
                <button onClick={this.validate}>Start Game</button>
            </div>
        );
    }
}

export default GameSetup;

