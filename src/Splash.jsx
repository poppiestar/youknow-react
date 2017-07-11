
import React, { Component } from 'react';

class Splash extends Component {
    render () {
        return (
            <div>
                <h1>Yo<b>u</b> K<b>no</b>w</h1>
                <p>Keep track of your games.</p>
                <button onClick={this.props.continue}>Begin</button>
            </div>
        );
    }
}

export default Splash;
