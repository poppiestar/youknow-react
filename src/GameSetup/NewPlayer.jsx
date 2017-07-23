
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewPlayer extends Component {
    addPlayer () {
        const name = this.textInput.value;

        if (name !== '') {
            this.props.addPlayer(name);
            this.textInput.value = '';
        }
    }

    render () {
        return (
            <div>
                <input type="text" ref={(input) => { this.textInput = input; }} />
                <button onClick={this.addPlayer.bind(this)}>Add</button>
            </div>
        );
    }
}

NewPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

export default NewPlayer;
