
import React, { Component } from 'react';

import GoalSelect from './GoalSelect';

class SetGoal extends Component {
    render () {
        return (
            <div>
                Set Goal:
                <GoalSelect goal={this.props.goal} updateGoal={this.props.updateGoal} />
            </div>
        );
    }
}
export default SetGoal;
