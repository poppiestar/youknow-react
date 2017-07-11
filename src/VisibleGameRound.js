
import { connect } from 'react-redux';

import { roundOver } from './actions';
import GameRound from './GameRound';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        score: state.game.roundScore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        roundOver: (winner) => {
            dispatch(roundOver(winner));
        }
    };
};

const VisibleGameRound = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameRound);

export default VisibleGameRound;
