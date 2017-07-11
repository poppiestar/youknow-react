
import React from 'react';

const Splash = React.createClass({
    startGame: function startGame () {
        this.props.setStage(2);
    },

    render: function () {
        return (
            <div>
                <h1>Yo<b>u</b> K<b>no</b>w</h1>
                <p>Keep track of your games.</p>
                <button onClick={this.startGame}>Begin</button>
            </div>
        );
    }
});

export default Splash;

