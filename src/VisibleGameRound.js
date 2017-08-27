// @flow

import { connect } from 'react-redux';

import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './GameRound';

import { getPlayers, getRoundScore } from './reducers';
import { roundOver } from './actions';
import GameRound from './GameRound';

const mapStateToProps = (state: State) => ({
    score: getRoundScore(state),
    players: getPlayers(state)
});

const VisibleGameRound: Connector<Props, {}> = connect(
    mapStateToProps,
    { roundOver }
)(GameRound);

export default VisibleGameRound;
