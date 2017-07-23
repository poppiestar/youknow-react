// @flow

import React from 'react';

const GOALS = [300, 500, 750, 1000];

type GoalSelectPropTypes = {
  goal: number,
  updateGoal: (value: string) => void
};

function goalsList (goals): Array<any> {
    return goals.map((item, i) => <option key={i} value={item}>{item}</option>);
}

const GoalSelect = ({ goal, updateGoal }: GoalSelectPropTypes) =>
    <select value={goal} onChange={(e: Event & { currentTarget: HTMLSelectElement }) => updateGoal(e.currentTarget.value)}>
        { goalsList(GOALS) }
    </select>;

export default GoalSelect;
