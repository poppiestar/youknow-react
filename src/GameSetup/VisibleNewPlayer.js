// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { Connector } from 'react-redux';
import type { Props } from './NewPlayer';

import { addPlayer } from '../actions';
import NewPlayer from './NewPlayer';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addPlayer: (name: string) => {
        dispatch(addPlayer(name));
    }
});

const VisibleNewPlayer: Connector<{}, Props> = connect(
    null,
    mapDispatchToProps
)(NewPlayer);

export default VisibleNewPlayer;
