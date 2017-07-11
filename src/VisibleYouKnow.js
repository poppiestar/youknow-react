
import { connect } from 'react-redux';
import YouKnow from './YouKnow';

const mapStateToProps = (state) => {
    return {
        goal: state.goal,
        stage: state.stage,
        players: state.players
    };
};

const VisibleYouKnow = connect(
    mapStateToProps
)(YouKnow);

export default VisibleYouKnow;
