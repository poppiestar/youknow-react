
import React, { Component } from 'react';

export default class ScoreInput extends Component {
    constructor (props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment () {
        this.props.increment(this.props.value);
        this.setState({ count: this.state.count + 1 });
    }

    decrement () {
        if (this.state.count > 0) {
            this.props.decrement(this.props.value);
            this.setState({ count: this.state.count - 1});
        }
    }

    render () {
        return (
            <div>
                {this.props.name}
                <button onClick={this.decrement.bind(this)}>-</button>
                {this.state.count}
                <button onClick={this.increment.bind(this)}>+</button>
            </div>
        );
    }
}
