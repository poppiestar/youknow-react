// @flow

import React from 'react';
import type { Element } from 'react';

type SplashPropTypes = {
  moveToSetup: () => void
};

const Splash = ({ moveToSetup }: SplashPropTypes): Element<any> =>
    <div>
        <h1>Yo<b>u</b> K<b>no</b>w</h1>
        <p>Keep track of your games.</p>
        <button onClick={moveToSetup}>Begin</button>
    </div>;

export default Splash;
