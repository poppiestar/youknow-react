
import React from 'react';

const goals = [300, 500, 750, 1000];

const GoalSelect = ({ goal, updateGoal }) => (
    <select value={goal} onChange={(e) => updateGoal(e.currentTarget.value)}>
        {goals.map((item, i) => {
            return <option key={i} value={item}>{item}</option>;
        })}
    </select>
);

export default GoalSelect;
