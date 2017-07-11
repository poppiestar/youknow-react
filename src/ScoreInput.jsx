
import React from 'react';

class ScoreInput extends React.Component {
    constructor (props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

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
                <button onClick={this.decrement}>-</button>
                {this.state.count}
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default ScoreInput;

