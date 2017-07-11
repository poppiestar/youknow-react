
import React, { Component } from 'react';

export default class NewPlayer extends Component {
    addPlayer () {
        const name = this.refs.name.value;

        if (name !== '') {
            this.props.addPlayer(name);
            this.refs.name.value = '';
        }
    }

    render () {
        return (
            <div>
                <input type="text" ref="name" />
                <button onClick={this.addPlayer.bind(this)}>Add</button>
            </div>
        );
    }
}
