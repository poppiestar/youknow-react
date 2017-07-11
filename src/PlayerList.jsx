
import React from 'react';

class PlayerList extends React.Component {
    render () {
        const players = this.props.players.map((player, i) => {
            return (
                <li key={i} >{player.name}</li>
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

