import { userProfile } from "../API/api";

const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    postData: [
        { id: 1, message: "Who cares, if you exist?", likesCount: 15 },
        { id: 2, message: "You came all this way just for that", likesCount: 1 }
    ],
    newPostText: 'Universe',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POST: {
            let copyState = { ...state };
            if (!action.thisIsDialog) {
                copyState.newPostText = action.textPost;
            }
            return copyState;
        }
        case ADD_POST: {
            let newPostText = state.newPostText;
            return {
                ...state,
                postData: [...state.postData, { id: 6, message: newPostText, likesCount: 0 }],
                newPostText: ''
            }
        }
        case SET_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_PROFILE, profile })
export const updateNewPostTextActionCreator = (text, thisIsDialog) =>
    ({ type: CHANGE_POST, textPost: text, thisIsDialog: thisIsDialog })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        if (!userId) userId = 3;
        userProfile.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;