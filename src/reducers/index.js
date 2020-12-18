import {
    GET_USERS,
    GET_POSTS
} from '../actions/types';

const initialState = {
    posts: [],
    users: []
}

export const rootReducer = (state = initialState, action) => {
    // console.log(state, action);
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}
