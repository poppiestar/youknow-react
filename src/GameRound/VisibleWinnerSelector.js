// @flow

import { connect } from 'react-redux';

import type { State } from '../types';
import type { Connector } from 'react-redux';
import type { Props } from './WinnerSelector';

import { getPlayers } from '../reducers';
import { setWinner } from '../actions';
import WinnerSelector from './WinnerSelector';

const mapStateToProps = (state: State) => ({
    players: getPlayers(state)
});

const connector: Connector<{}, Props> = connect(
    mapStateToProps,
    { setWinner }
);

export default connector(WinnerSelector);
