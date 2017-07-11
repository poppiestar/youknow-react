
import React from 'react';
import update from 'react-addons-update';

import Splash from './Splash';
import GameSetup from './GameSetup';
import GameRound from './GameRound';
import EnterScore from './EnterScore';
import Winner from './Winner';

const Stage = {
    SPLASH: 1,
    GAME_SETUP: 2,
    GAME_ROUND: 3,
    ENTER_SCORE: 4,
    WINNER: 5
};

const YouKnow = React.createClass({
    setStage: function setStage (stage) {
        this.setState({ stage: stage });
    },
    removePlayer: function removePlayer (player) {
        this.setState({
            players: this.state.players.filter((candidate) => {
                return candidate.name !== player.name;
            })
        });
    },
    moveToSetup: function moveToSetup () {
        this.setStage(Stage.GAME_SETUP);
    },
    moveToGameRound: function moveToGameRound () {
        this.setStage(Stage.GAME_ROUND);
    },
    moveToEnterScore: function moveToEnterScore (winner) {
        this.setState({
            winner: winner,
            stage: Stage.ENTER_SCORE
        });
    },
    moveToNextRound: function moveToNextRound (score) {
        // add score to winner's score table
        let players = update(this.state.players, {
            [this.state.winner]: {
                scores: { $push: [score] }
            }
        });

        const winner = players[this.state.winner];

        // calculate winner's total to see if they've beaten the goal
        if (this.calculateTotal(winner.scores) >= this.props.goal) {
            this.setState({
                players: players,
                stage: Stage.WINNER
            });
        } else {
            this.setState({
                players: players,
                stage: Stage.GAME_ROUND,
                winner: undefined
            });
        }
    },
    calculateTotal: function calculateTotal (scores) {
        return scores.reduce( (prev, curr) => prev + curr );
    },
    restartGame: function restartGame () {
        this.setState({
            stage: Stage.GAME_ROUND,
            goal: this.props.goal,
            players: this.state.players.map( (player) => {
                return this.newPlayer(player.name);
            })
        });
    },
    resetGame: function resetGame () {
        this.setState({
            players: [],
            goal: 500,
            stage: Stage.GAME_SETUP
        });
    },
    render: function render () {
        switch (this.props.stage) {
            case Stage.SPLASH:
                return <Splash continue={this.moveToSetup} />;

            case Stage.GAME_SETUP:
                return <GameSetup continue={this.moveToGameRound} />;

            case Stage.GAME_ROUND:
                return <GameRound continue={this.moveToEnterScore} players={this.state.players} />;

            case Stage.ENTER_SCORE:
                return <EnterScore continue={this.moveToNextRound} winner={this.state.players[this.state.winner].name} />;

            case Stage.WINNER:
                return <Winner winner={this.state.players[this.state.winner]} restartGame={this.restartGame} resetGame={this.resetGame} />;

            default:
                return <Splash />;
        };
    }
});

export default YouKnow;
