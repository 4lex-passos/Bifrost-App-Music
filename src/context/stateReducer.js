export const initialState = {
    user: null,
    playlists: [],
    //spotify: null,
    //discover_weekly: null,
    //top_artists: null,
    playing: false,
    item: null,
};

function stateReducer(state, action) {
    console.log("REDUCER: ", action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
}

export default stateReducer;
