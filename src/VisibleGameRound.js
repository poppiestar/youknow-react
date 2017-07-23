// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './GameRound';

import { roundOver } from './actions';
import GameRound from './GameRound';

const mapStateToProps = ({ players, game }: State) => ({
    score: game.roundScore,
    players
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    roundOver: () => {
        dispatch(roundOver());
    }
});

const VisibleGameRound: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameRound);

export default VisibleGameRound;
