
export const SET_GOAL = 'SET_GOAL';
export const setGoal = (goal) => {
    return {
        type: SET_GOAL,
        value: goal
    }
}

export const ADD_PLAYER = 'ADD_PLAYER';
export const addPlayer = (name) => {
    return {
        type: ADD_PLAYER,
        value: name
    };
}

export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const removePlayer = (id) => {
    return {
        type: REMOVE_PLAYER,
        value: id
    };
}
