// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './EnterScore';

import { addScore, subtractScore, nextRound } from './actions';
import EnterScore from './EnterScore';

const mapStateToProps = ({ players, round }: State) => ({
    winner: round.winner,
    players
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addScore: (value: number) => {
        dispatch(addScore(value));
    },
    subtractScore: (value: number) => {
        dispatch(subtractScore(value));
    },
    nextRound: () => {
        dispatch(nextRound());
    }
});

const VisibleEnterScore: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterScore);

export default VisibleEnterScore;
