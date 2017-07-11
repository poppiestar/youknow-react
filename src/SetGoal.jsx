
import React, { Component } from 'react';

import GoalSelect from './GoalSelect';

const SetGoal = React.createClass({
    render: function render () {
        return (
            <div>
                Set Goal:
                <GoalSelect goal={this.props.goal} updateGoal={this.props.updateGoal} />
            </div>
        );
    }
});

export default SetGoal;
