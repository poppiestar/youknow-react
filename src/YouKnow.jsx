
import React from 'react';

import Splash from './Splash';
import PlayerEntry from './PlayerEntry';
/*
import GameRound from './GameRound';
import EnterScore from './EnterScore';
import Winner from './Winner';
*/

const Stage = {
    SPLASH: 1,
    PLAYER_ENTRY: 2,
    GAME_ROUND: 3,
    ENTER_SCORE: 4,
    WINNER: 5
};

const YouKnow = React.createClass({
    getInitialState: function getInitialState () {
        return {
            players: [],
            goal: 300,
            round: 0,
            stage: Stage.SPLASH
        };
    },
    setStage: function setStage (stage) {
        console.log('set stage()');
        this.setState({ stage: stage });
    },
    render: function render () {
        switch (this.state.stage) {
            case Stage.SPLASH: 
                return <Splash setStage={this.setStage} />;
                break;

            case Stage.PLAYER_ENTRY:
                return <PlayerEntry />;
                break;

/*
            case Stage.GAME_ROUND:
                return <GameRound />;

            case Stage.ENTER_SCORE:
                return <EnterScore />;

            case Stage.WINNER:
                return <Winner />;

*/
            default:
                return <Splash />;
        };
    }
});

export default YouKnow;

