// @flow

import React from 'react';
import type { Element } from 'react';

import VisibleGoalSelect from './VisibleGoalSelect';

const SetGoal = (): Element<any> =>
  <div>
    <p>Set Goal:</p>
    <VisibleGoalSelect />
  </div>;

export default SetGoal;
