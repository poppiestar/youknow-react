
import React from 'react';

import SetGoal from './SetGoal';

class GameSetup extends React.Component {
    render () {
        return (
            <div>
                <SetGoal goal={this.props.goal} updateGoal={this.props.updateGoal} />
            </div>
        );
    }
}

export default GameSetup;

