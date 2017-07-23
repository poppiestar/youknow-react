// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { State } from '../types';
import type { Connector } from 'react-redux';
import type { Props } from './WinnerSelector';

import { setWinner } from '../actions';
import WinnerSelector from './WinnerSelector';

const mapStateToProps = ({ players }: State) => ({
    players
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setWinner: (winner: number) => {
        dispatch(setWinner(winner));
    }
});

const connector: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(WinnerSelector);
