
import React, { Component } from 'react';

const goals = [300, 500, 750, 1000];

const GoalSelect = React.createClass({
    handleChange: function updateGoal (e) {
        this.props.updateGoal(e.currentTarget.value);
    },

    render: function render () {
        const goalItems = goals.map((item, i) => {
            return <option key={i} value={item}>{item}</option>;
        });

        return (
            <select value={this.props.goal} onChange={this.handleChange}>
                {goalItems}
            </select>
        );
    }
});

export default GoalSelect;
