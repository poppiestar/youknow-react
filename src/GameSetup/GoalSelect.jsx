// @flow

import React from 'react';
import type { Element } from 'react';

const GOALS = [300, 500, 750, 1000];

type GoalSelectPropTypes = {
  goal: number,
  updateGoal: (value: string) => void
};

function goalsList (goals): Array<Element<any>> {
  return goals.map((item, i) => <option key={i} value={item}>{item}</option>);
}

const GoalSelect = ({ goal, updateGoal }: GoalSelectPropTypes): Element<any> =>
  <select value={goal} onChange={(e: Event & { currentTarget: HTMLSelectElement }) => updateGoal(e.currentTarget.value)}>
    { goalsList(GOALS) }
  </select>;

export default GoalSelect;
