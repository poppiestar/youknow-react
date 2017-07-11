
import React from 'react';

class WinnerSelector extends React.Component {
    constructor (props) {
        super(props);

        this.selectWinner = this.selectWinner.bind(this);
    }

    selectWinner () {
        console.log(this.refs.winner.value);
        this.props.selectWinner(this.refs.winner.value);
    }

    render () {
        const players = this.props.players.map((player, i) => {
            return (
                <option key={i} value={i}>{player.name}</option>
            );
        });


        return (
            <select ref="winner" onChange={this.selectWinner}>
                <option>Who won?</option>
                {players}
            </select>
        );
    }
}

export default WinnerSelector;

