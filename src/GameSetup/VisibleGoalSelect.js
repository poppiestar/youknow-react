// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { State } from '../types';
import type { Connector } from 'react-redux';
import type { Props } from './GoalSelect';

import { setGoal } from '../actions';
import GoalSelect from './GoalSelect';

const mapStateToProps = ({ goal }: State) => ({
    goal
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateGoal: (goal: number) => {
        dispatch(setGoal(goal));
    }
});

const VisibleGoalSelect: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalSelect);

export default VisibleGoalSelect;
