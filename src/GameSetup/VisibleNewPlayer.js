
import { connect } from 'react-redux';

import { addPlayer } from './actions';
import NewPlayer from './NewPlayer';

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (name) => {
            dispatch(addPlayer(name));
        }
    };
};

const VisibleNewPlayer = connect(
    null,
    mapDispatchToProps
)(NewPlayer);

export default VisibleNewPlayer;
