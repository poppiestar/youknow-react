
import { connect } from 'react-redux';
import YouKnow from './YouKnow';

const mapStateToProps = ({ goal, game, players }) => ({
    goal,
    game,
    players
});

const VisibleYouKnow = connect(
    mapStateToProps
)(YouKnow);

export default VisibleYouKnow;
