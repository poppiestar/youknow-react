
export const setGoal = (goal) => {
    return {
        type: 'SET_GOAL',
        value: goal
    }
}

export const addPlayer = (name) => {
    return {
        type: 'ADD_PLAYER',
        value: name
    };
}

// export const removePlayer = (id) => {
//     console.log('remove player ', id);
// }
