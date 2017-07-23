// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { State } from '../types';
import type { Connector } from 'react-redux';
import type { Props } from './PlayerList';

import { removePlayer } from '../actions';
import PlayerList from './PlayerList';

const mapStateToProps = ({ players }: State) => ({
    players
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    removePlayer: (id: number) => {
        dispatch(removePlayer(id));
    }
});

const VisiblePlayerList: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerList);

export default VisiblePlayerList;
