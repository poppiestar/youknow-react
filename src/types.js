// @flow

export type Player = {
    name: string,
    scores: Array<number>
};

export type GameState = {
    stage: number
};

export type RoundState = {
    score: number,
    winner: number
};

export type GoalState = number;

export type PlayersState = Array<Player>;

export type State = {
    players: PlayersState,
    game: GameState,
    goal: GoalState,
    round: RoundState
};

export type Action =
    | { type: 'GOAL:SET', goal: number }
    | { type: 'PLAYERS:ADD', name: string }
    | { type: 'PLAYERS:REMOVE', id: number }
    | { type: 'PLAYERS:ADD_PLAYER_SCORE', winner: number, score: number }
    | { type: 'GAME:SET_STAGE', stage: number }
    | { type: 'GAME:RESTART' }
    | { type: 'GAME:RESET' }
    | { type: 'ROUND:SET_WINNER', winner: number }
    | { type: 'ROUND:ADD_SCORE', value: number }
    | { type: 'ROUND:SUBTRACT_SCORE', value: number };

export type Dispatch = (action: Action | ThunkAction) => any;
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
