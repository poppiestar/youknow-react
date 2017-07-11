
import { connect } from 'react-redux';

import { nextRound, addScore, subtractScore } from './actions';
import EnterScore from './EnterScore';

const mapStateToProps = (state) => {
    return {
        winner: state.players[state.game.winner]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addScore: (value) => {
            dispatch(addScore(value));
        },
        subtractScore: (value) => {
            dispatch(subtractScore(value));
        },
        nextRound: () => {
            dispatch(nextRound());
        }
    };
};

const VisibleEnterScore = connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterScore);

export default VisibleEnterScore;
