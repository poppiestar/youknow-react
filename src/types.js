// @flow

export type Player = {
    id: number,
    name: string
};

export type Players = { [id: number]: Player };
export type Scores = { [id: number]: Array<number> };

export type GameState = {
    stage: number
};

export type RoundState = {
    score: number,
    winner: number
};

export type GoalState = number;

export type PlayersByIdState = {
    [id: number]: Player
};

export type AllPlayerIdsState = Array<number>;

export type PlayerScoresState = { [id: number]: Array<number> };

export type PlayersState = {
    byId: PlayersByIdState,
    allIds: AllPlayerIdsState
};

export type State = {
    players: PlayersState,
    game: GameState,
    goal: GoalState,
    round: RoundState,
    scores: PlayerScoresState
};

export type Action =
    | { type: 'GOAL:SET', goal: number }
    | { type: 'PLAYERS:ADD', name: string, id: number }
    | { type: 'PLAYERS:REMOVE', id: number }
    | { type: 'PLAYERS:ADD_PLAYER_SCORE', id: number, score: number }
    | { type: 'GAME:SET_STAGE', stage: number }
    | { type: 'GAME:RESTART' }
    | { type: 'GAME:RESET' }
    | { type: 'ROUND:SET_WINNER', id: number }
    | { type: 'ROUND:ADD_SCORE', value: number }
    | { type: 'ROUND:SUBTRACT_SCORE', value: number };

export type Dispatch = (action: Action | ThunkAction) => any;
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
