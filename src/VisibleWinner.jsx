// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './Winner';

import { restartGame, resetGame } from './actions';
import Winner from './Winner';

const mapStateToProps = ({ players, round }: State) => ({
    score: round.score,
    players
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    restartGame: () => {
        dispatch(restartGame());
    },
    resetGame: () => {
        dispatch(resetGame());
    }
});

const VisibleWinner: Connector<Props, {}> = connect(
    mapStateToProps,
    mapDispatchToProps
)(Winner);

export default VisibleWinner;
