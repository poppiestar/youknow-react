
import React from 'react';

import Splash from './Splash';
import GameSetup from './GameSetup';
import GameRound from './GameRound';
/*
import EnterScore from './EnterScore';
import Winner from './Winner';
*/

const Stage = {
    SPLASH: 1,
    GAME_SETUP: 2,
    GAME_ROUND: 3,
    ENTER_SCORE: 4,
    WINNER: 5
};

const YouKnow = React.createClass({
    getInitialState: function getInitialState () {
        return {
            players: [{ name: 'Drew', scores: [0] }, { name: 'Suzy', scores: [0] }],
            goal: 750,
            round: 0,
            stage: Stage.SPLASH
        };
    },
    setStage: function setStage (stage) {
        this.setState({ stage: stage });
    },
    updateGoal: function setGoal (goal) {
        this.setState({ goal: goal });
    },
    addPlayer: function addPlayer (name) {
        this.setState({ players: this.state.players.concat(this.newPlayer(name)) });
    },
    newPlayer: function newPlayer (name) {
        return {
            name: name,
            scores: [0]
        };
    },
    startGame: function startGame () {
        if (this.state.players.length < 2) {
            console.log('not enough players');
            return false;
        } else {
            this.setStage(Stage.GAME_ROUND);
        }
    moveToSetup: function moveToSetup () {
        this.setStage(Stage.GAME_SETUP);
    },
    render: function render () {
        switch (this.state.stage) {
            case Stage.SPLASH: 
                return <Splash continue={this.moveToSetup} />;
                break;

            case Stage.GAME_SETUP:
                return <GameSetup startGame={this.startGame} addPlayer={this.addPlayer} players={this.state.players} setStage={this.setStage} goal={this.state.goal} updateGoal={this.updateGoal} />;
                break;

            case Stage.GAME_ROUND:
                return <GameRound round={this.state.round} players={this.state.players} />;

/*
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

