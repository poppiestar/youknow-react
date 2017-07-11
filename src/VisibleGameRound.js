
import { connect } from 'react-redux';

import { roundOver } from './actions';
import GameRound from './GameRound';

const mapStateToProps = (state) => {
    return {
        players: state.players
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
