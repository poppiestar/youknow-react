
import React from 'react';
import PropTypes from 'prop-types';

import SetGoal from './SetGoal';

const GameSetup = ({ goal, updateGoal }) =>
  <SetGoal goal={goal} updateGoal={updateGoal} />;

GameSetup.propTypes = {
  goal: PropTypes.number.isRequired,
  updateGoal: PropTypes.func.isRequired
};

export default GameSetup;
