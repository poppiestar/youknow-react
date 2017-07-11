
import React from 'react';

const Splash = ({ moveToSetup }) => (
    <div>
        <h1>Yo<b>u</b> K<b>no</b>w</h1>
        <p>Keep track of your games.</p>
        <button onClick={moveToSetup}>Begin</button>
    </div>
);

export default Splash;
