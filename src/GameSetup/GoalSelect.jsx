// @flow

import React from 'react';

const GOALS: Array<number> = [300, 500, 750, 1000];

export type Props = {
  goal: number,
  updateGoal: (value: string) => void
};

const goalsList = (goals): Array<any> =>
    goals.map((item, i) => <option key={i} value={item}>{item}</option>);

const GoalSelect = ({ goal, updateGoal }: Props) =>
    <select value={goal} onChange={(e: Event & { currentTarget: HTMLSelectElement }) => updateGoal(e.currentTarget.value)}>
        { goalsList(GOALS) }
    </select>;

export default GoalSelect;
