// @flow

import React from 'react';
import type { Element } from 'react';

import VisibleSplash from './VisibleSplash';
import VisibleGameSetup from './VisibleGameSetup';
import VisibleGameRound from './VisibleGameRound';
import VisibleEnterScore from './VisibleEnterScore';
// import Winner from './Winner';

import Stage from './constants/stages';

type Game = {
  stage: number
};

type YouKnowPropTypes = {
  game: Game
};

const YouKnow = ({ game }: YouKnowPropTypes): Element<any> => {
    switch (game.stage) {
    case Stage.SPLASH:
        return <VisibleSplash />;

    case Stage.GAME_SETUP:
        return <VisibleGameSetup />;

    case Stage.GAME_ROUND:
        return <VisibleGameRound />;

    case Stage.ENTER_SCORE:
        return <VisibleEnterScore />;

    // case Stage.WINNER:
    //   return <Winner winner={this.state.players[this.state.winner]} restartGame={this.restartGame} resetGame={this.resetGame} />;

    default:
        return <VisibleSplash />;
    }
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
