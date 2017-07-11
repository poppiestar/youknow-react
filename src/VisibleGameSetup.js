
import { connect } from 'react-redux';

import { startGame } from './actions';
import GameSetup from './GameSetup';

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            dispatch(startGame());
        }
    };
};

const VisibleGameSetup = connect(
    null,
    mapDispatchToProps
)(GameSetup);

export default VisibleGameSetup;
