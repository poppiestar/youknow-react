
import { connect } from 'react-redux';
import YouKnow from './YouKnow';

const mapStateToProps = (state) => {
    return {
        goal: state.goal,
        stage: state.stage
    };
};

const VisibleYouKnow = connect(
    mapStateToProps
)(YouKnow);

export default VisibleYouKnow;
