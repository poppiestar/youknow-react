
import React, { Component } from 'react';

import PlayerList from './PlayerList';
import NewPlayer from './NewPlayer';

export default class EnterPlayers extends Component {
    render () {
        return (
            <div>
                <h2>Enter Players</h2>
                <PlayerList removePlayer={this.props.removePlayer} players={this.props.players} />
                <NewPlayer addPlayer={this.props.addPlayer} />
            </div>
        );
    }
}
