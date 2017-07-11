
import React from 'react';

import PlayerList from './PlayerList';
import NewPlayer from './NewPlayer';

class EnterPlayers extends React.Component {
    render () {
        return (
            <div>
                <h2>Enter Players</h2>
                <PlayerList players={this.props.players} />
                <NewPlayer addPlayer={this.props.addPlayer} />
            </div>
        );
    }
}

export default EnterPlayers;

