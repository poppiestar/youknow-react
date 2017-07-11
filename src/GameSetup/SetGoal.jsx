
import React, { Component } from 'react';

import VisibleGoalSelect from './VisibleGoalSelect';

export default class SetGoal extends Component {
    render () {
        return (
            <div>
                Set Goal:
                <VisibleGoalSelect />
            </div>
        );
    }
}
