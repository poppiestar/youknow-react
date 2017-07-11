
import { connect } from 'react-redux';

import { setWinner } from '../actions';
import WinnerSelector from './WinnerSelector';

const mapStateToProps = (state) => {
    return {
        players: state.players
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setWinner: (winner) => {
            console.log('set winner: ', winner);
            dispatch(setWinner(winner));
        }
    };
};

const VisibleWinnerSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(WinnerSelector);

export default VisibleWinnerSelector;
