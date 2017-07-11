
import React from 'react';

class PlayerList extends React.Component {
    render () {
        const players = this.props.players.map((player, i) => {
            return (
                <li key={i}>{player.name} <button onClick={this.props.removePlayer.bind(this, player)}>remove</button></li>
            );
        });

        return (
            <ul>
                {players}
            </ul>
        );
    }
}

export default PlayerList;

