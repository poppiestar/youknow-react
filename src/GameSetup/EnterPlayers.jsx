
import React from 'react';

import VisiblePlayerList from './VisiblePlayerList';
import VisibleNewPlayer from './VisibleNewPlayer';

const EnterPlayers = () =>
    <div>
        <h2>Enter Players</h2>
        <VisiblePlayerList />
        <VisibleNewPlayer />
    </div>;

export default EnterPlayers;
