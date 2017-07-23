
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScoreInput extends Component {
    constructor (props) {
        super(props);

        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
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
                <button className="decrement" onClick={this.decrement}>-</button>
                <span className="count">{this.state.count}</span>
                <button className="increment" onClick={this.increment}>+</button>
            </div>
        );
    }
}

ScoreInput.propTypes = {
  name: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default ScoreInput;
