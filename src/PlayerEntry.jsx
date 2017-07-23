// @flow

import React from 'react';

import SetGoal from './GameSetup/SetGoal';

type GameSetupPropTypes = {
  goal: number,
  updateGoal: (goal: number) => void
};

const GameSetup = ({ goal, updateGoal }: GameSetupPropTypes) =>
    <SetGoal goal={goal} updateGoal={updateGoal} />;

export default GameSetup;
