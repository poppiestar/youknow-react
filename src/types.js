// @flow

export type Player = {
    name: string,
    scores: Array<number>
};

export type GameState = {
    stage: number,
    roundScore: number,
    roundWinner?: number
};

export type GoalState = number;

export type PlayersState = Array<Player>;

export type State = {
    players: PlayersState,
    game: GameState,
    goal: GoalState
};

export type Action =
    | { type: 'SET_GOAL', goal: number }
    | { type: 'ADD_PLAYER', name: string }
    | { type: 'REMOVE_PLAYER', id: number }
    | { type: 'SET_STAGE', stage: number }
    | { type: 'SET_WINNER', winner: number }
    | { type: 'SET_PLAYER_SCORE', winner: number, score: number }
    | { type: 'ADD_SCORE', value: number }
    | { type: 'SUBTRACT_SCORE', value: number };

export type Dispatch = (action: Action | ThunkAction ) => any;
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
