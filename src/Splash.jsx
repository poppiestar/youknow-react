
import React from 'react';
import PropTypes from 'prop-types';

const Splash = ({ moveToSetup }) =>
  <div>
    <h1>Yo<b>u</b> K<b>no</b>w</h1>
    <p>Keep track of your games.</p>
    <button onClick={moveToSetup}>Begin</button>
  </div>;

Splash.propTypes = {
  moveToSetup: PropTypes.func.isRequired
};

export default Splash;
