
import React from 'react';

import SetGoal from './GameSetup/SetGoal';
import EnterPlayers from './GameSetup/EnterPlayers';
// import ErrorMessage from './ErrorMessage';

const GameSetup = ({ startGame }) => (
    <div>
        <h1>Player Entry</h1>
        <GameSetup.SetGoal />
        <GameSetup.EnterPlayers />
        <button onClick={startGame}>Start Game</button>
    </div>
);

// export default class GameSetup extends Component {
//     constructor (props) {
//         super(props);
//
//         this.state = {};
//     }
//
//     validate () {
//         if (this.props.players.length < 2) {
//             this.setState({
//                 errorMessage: 'Not enough players to start the game'
//             });
//         } else {
//             this.props.continue();
//         }
//     }
//
//     render () {
//         return (
//         );
//     }
// }
//
GameSetup.SetGoal = SetGoal;
GameSetup.EnterPlayers = EnterPlayers;

export default GameSetup;
