
import React, { Component } from 'react';

import SetGoal from './SetGoal';

class GameSetup extends Component {
    render () {
        return (
            <div>
                <SetGoal goal={this.props.goal} updateGoal={this.props.updateGoal} />
            </div>
        );
    }
}

export default GameSetup;
