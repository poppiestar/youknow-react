// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { Connector } from 'react-redux';
import type { Props } from './GameSetup';

import { startGame } from './actions';
import GameSetup from './GameSetup';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    startGame: () => {
        dispatch(startGame());
    }
});

const VisibleGameSetup: Connector<{}, Props> = connect(
    null,
    mapDispatchToProps
)(GameSetup);

export default VisibleGameSetup;
