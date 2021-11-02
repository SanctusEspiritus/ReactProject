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
        case ADD_POST:
            let objMessage = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(objMessage);
            state.newPostText = '';
            return state;
        case CHANGE_POST:
            if (!action.thisIsDialog) {
                state.newPostText = action.textPost;
            }
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text, thisIsDialog) =>
    ({ type: CHANGE_POST, textPost: text, thisIsDialog: thisIsDialog })

export default profileReducer;