
import React from 'react';

import SetGoal from './SetGoal';
import EnterPlayers from './EnterPlayers';

class GameSetup extends React.Component {
    constructor (props) {
        super(props);

        this.validate = this.validate.bind(this);
        this.setState = this.setState.bind(this);

        this.state = {};
    }

    validate () {
        if (this.props.players.length < 2) {
            this.setState({
                errorMessage: 'Note enough players to start the game'
            });
        } else {
            this.props.continue();
        }
    }

    render () {
        let errorMessage;

        if (this.state.errorMessage) {
            errorMessage = <p>{this.state.errorMessage}</p>;
        }

        return (
            <div>
                <h1>Player Entry</h1>
                {errorMessage}
                <SetGoal goal={this.props.goal} updateGoal={this.props.updateGoal} />
                <EnterPlayers addPlayer={this.props.addPlayer} players={this.props.players} />
                <button onClick={this.validate}>Start Game</button>
            </div>
        );
    }
}

export default GameSetup;

