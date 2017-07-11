
import React, { Component } from 'react';

const goals = [300, 500, 750, 1000];

export default class GoalSelect extends Component {
    constructor (props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.props.updateGoal(e.currentTarget.value);
    }

    render () {
        const goalItems = goals.map((item, i) => {
            return <option key={i} value={item}>{item}</option>;
        });

        return (
            <select value={this.props.goal} onChange={this.handleChange}>
                {goalItems}
            </select>
        );
    }
}
