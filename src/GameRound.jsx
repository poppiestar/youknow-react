
import React from 'react';

import PlayerScores from './PlayerScores';

class GameRound extends React.Component {
    render () {
        return (
            <div>
                <h1>Round {this.props.round}</h1>
                <PlayerScores players={this.props.players} />
            </div>
        );
    }
}

export default GameRound;

