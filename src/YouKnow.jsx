
import React from 'react';
import update from 'react-addons-update';

import VisibleSplash from './VisibleSplash';
import VisibleGameSetup from './VisibleGameSetup';
import VisibleGameRound from './VisibleGameRound';
import VisibleEnterScore from './VisibleEnterScore';
import Winner from './Winner';

const Stage = {
    SPLASH: 1,
    GAME_SETUP: 2,
    GAME_ROUND: 3,
    ENTER_SCORE: 4,
    WINNER: 5
};

const YouKnow = ({ goal, game, players }) => {
    switch (game.stage) {
        case Stage.SPLASH:
            return <VisibleSplash />;

        case Stage.GAME_SETUP:
            return <VisibleGameSetup />;

        case Stage.GAME_ROUND:
            return <VisibleGameRound />;

        case Stage.ENTER_SCORE:
            return <VisibleEnterScore />;

        case Stage.WINNER:
            return <Winner winner={this.state.players[this.state.winner]} restartGame={this.restartGame} resetGame={this.resetGame} />;

        default:
            return <VisibleSplash />;
    };
};

    // restartGame: function restartGame () {
    //     this.setState({
    //         stage: Stage.GAME_ROUND,
    //         goal: this.props.goal,
    //         players: this.state.players.map( (player) => {
    //             return this.newPlayer(player.name);
    //         })
    //     });
    // },
    // resetGame: function resetGame () {
    //     this.setState({
    //         players: [],
    //         goal: 500,
    //         stage: Stage.GAME_SETUP
    //     });
    // },
//     render: function render () {
//     }
// });

export default YouKnow;
