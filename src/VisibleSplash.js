
import { connect } from 'react-redux';

import { setStage, Stage } from './actions';
import Splash from './Splash';

const mapDispatchToProps = (dispatch) => {
    return {
        moveToSetup: () => {
            dispatch(setStage(Stage.GAME_SETUP));
        }
    };
};

const VisibleSplash = connect(
    null,
    mapDispatchToProps
)(Splash);

export default VisibleSplash;
