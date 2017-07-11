
import React, { Component } from 'react';

export default class WinnerSelector extends Component {
    constructor (props) {
        super(props);

        this.selectWinner = this.selectWinner.bind(this);
    }

    selectWinner () {
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
                <option value="">Who won?</option>
                {players}
            </select>
        );
    }
}