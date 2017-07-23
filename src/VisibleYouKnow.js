// @flow

import { connect } from 'react-redux';

import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './YouKnow';

import YouKnow from './YouKnow';

const mapStateToProps = ({ goal, game, players }: State) => ({
    goal,
    game,
    players
});

const VisibleYouKnow: Connector<Props> = connect(
    mapStateToProps
)(YouKnow);

export default VisibleYouKnow;
