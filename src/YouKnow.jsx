
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


// const YouKnow = React.createClass({
    // moveToSetup: function moveToSetup () {
    //     this.setStage(Stage.GAME_SETUP);
    // },
    // moveToGameRound: function moveToGameRound () {
    //     this.setStage(Stage.GAME_ROUND);
    // },
    // moveToEnterScore: function moveToEnterScore (winner) {
    //     this.setState({
    //         winner: winner,
    //         stage: Stage.ENTER_SCORE
    //     });
    // },
    // moveToNextRound: function moveToNextRound (score) {
    //     // add score to winner's score table
    //     let players = update(this.state.players, {
    //         [this.state.winner]: {
    //             scores: { $push: [score] }
    //         }
    //     });
    //
    //     const winner = players[this.state.winner];
    //
    //     // calculate winner's total to see if they've beaten the goal
    //     if (this.calculateTotal(winner.scores) >= this.props.goal) {
    //         this.setState({
    //             players: players,
    //             stage: Stage.WINNER
    //         });
    //     } else {
    //         this.setState({
    //             players: players,
    //             stage: Stage.GAME_ROUND,
    //             winner: undefined
    //         });
    //     }
    // },
    // calculateTotal: function calculateTotal (scores) {
    //     return scores.reduce( (prev, curr) => prev + curr );
    // },
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
