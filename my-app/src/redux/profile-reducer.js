const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

let initialState = {
    postData: [
        { id: 1, message: "Who cares, if you exist?", likesCount: 15 },
        { id: 2, message: "You came all this way just for that", likesCount: 1 }
    ],
    newPostText: 'Universe'
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
                postData: [...state.postData, {id: 6,message: newPostText,likesCount: 0}],
                newPostText: ''
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text, thisIsDialog) =>
    ({ type: CHANGE_POST, textPost: text, thisIsDialog: thisIsDialog })

export default profileReducer;