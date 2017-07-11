
function newPlayer (name) {
    return {
        name: name,
        scores: [0]
    };
}

const players = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [
                ...state,
                newPlayer(action.value)
            ];

        default:
            return state;
    }
}

export default players;
