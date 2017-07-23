
import React from 'react';
import PropTypes from 'prop-types';

const GOALS = [300, 500, 750, 1000];

function goalsList (goals) {
    return goals.map((item, i) => <option key={i} value={item}>{item}</option>);
}

const GoalSelect = ({ goal, updateGoal }) =>
    <select value={goal} onChange={(e) => updateGoal(e.currentTarget.value)}>
        { goalsList(GOALS) }
    </select>;

GoalSelect.propTypes = {
  goal: PropTypes.number.isRequired,
  updateGoal: PropTypes.func.isRequired
};

export default GoalSelect;
