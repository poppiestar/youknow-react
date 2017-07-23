// @flow

import React from 'react';
import type { Element } from 'react';

import VisiblePlayerList from './VisiblePlayerList';
import VisibleNewPlayer from './VisibleNewPlayer';

const EnterPlayers = (): Element<any> =>
  <div>
    <h2>Enter Players</h2>
    <VisiblePlayerList />
    <VisibleNewPlayer />
  </div>;

export default EnterPlayers;
