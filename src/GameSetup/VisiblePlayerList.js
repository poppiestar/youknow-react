
import { connect } from 'react-redux';

import { removePlayer } from './actions';
import PlayerList from './PlayerList';

const mapStateToProps = (state) => {
    return {
        players: state.players
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removePlayer: (id) => {
            // dispatch(removePlayer(id));
        }
    };
};

const VisiblePlayerList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerList);

export default VisiblePlayerList;
