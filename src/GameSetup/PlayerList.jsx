
import React, { Component } from 'react';

export default class PlayerList extends Component {
    removePlayer (id) {
        this.props.removePlayer(id);
    }

    render () {
        const players = this.props.players.map((player, i) => {
            return (
                <li key={i}>{player.name} <button onClick={this.removePlayer.bind(this, player)}>remove</button></li>
            );
        });

        return (
            <ul>
                {players}
            </ul>
        );
    }
}
