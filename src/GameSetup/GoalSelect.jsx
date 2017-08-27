// @flow

import React from 'react';

const GOALS: Array<number> = [300, 500, 750, 1000];

export type Props = {
  goal: number,
  setGoal: (value: string) => void
};

const goalsList = (goals): Array<any> =>
    goals.map((item, i) => <option key={i} value={item}>{item}</option>);

const GoalSelect = ({ goal, setGoal }: Props) =>
    <select value={goal} onChange={(e: Event & { currentTarget: HTMLSelectElement }) => setGoal(e.currentTarget.value)}>
        { goalsList(GOALS) }
    </select>;

export default GoalSelect;
