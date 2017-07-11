
import React, { Component } from 'react';

import VisiblePlayerList from './VisiblePlayerList';
import VisibleNewPlayer from './VisibleNewPlayer';

export default class EnterPlayers extends Component {
    render () {
        return (
            <div>
                <h2>Enter Players</h2>
                <VisiblePlayerList />
                <VisibleNewPlayer />
            </div>
        );
    }
}
