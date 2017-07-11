
import React from 'react';

class NewPlayer extends React.Component {
    constructor (props) {
        super(props);

        this.addPlayer = this.addPlayer.bind(this);
    }

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
                <button onClick={this.addPlayer}>Add</button>
            </div>
        );
    }
}

export default NewPlayer;

