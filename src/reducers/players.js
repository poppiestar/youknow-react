
function newPlayer (name) {
    return {
        name: name,
        scores: [0]
    };
}

const players = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            let things = [
                ...state,
                newPlayer(action.value)
            ];
            return things;

        default:
            return state;
    }
}

export default players;
