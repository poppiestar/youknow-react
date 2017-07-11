
import React from 'react';

import SetGoal from './SetGoal';
import EnterPlayers from './EnterPlayers';

class GameSetup extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>Player Entry</h1>
                <SetGoal goal={this.props.goal} updateGoal={this.props.updateGoal} />
                <EnterPlayers addPlayer={this.props.addPlayer} players={this.props.players} />
                <button onClick={this.props.startGame}>Start Game</button>
            </div>
        );
    }
}

export default GameSetup;

