
import { connect } from 'react-redux';
import { setGoal } from './actions';
import GoalSelect from './GoalSelect';

const mapStateToProps = (state) => {
    return {
        goal: state.goal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateGoal: (goal) => {
            dispatch(setGoal(goal));
        }
    };
};

const VisibleGoalSelect = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalSelect);

export default VisibleGoalSelect;
