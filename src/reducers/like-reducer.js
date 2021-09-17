export const initialState = {
    data: []
}

export const ADD_TO_LIKED_VIDEOS = "addToLikeVideo"

export const likeReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_LIKED_VIDEOS:
            return{
                data: state.data.concat(action.payload.id)
            };
    
        default:
            return state;
    }
}