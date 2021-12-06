import { getProfile } from "./auth-reducer";

const INITIALIZED_USER = 'INITIALIZED_USER';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_USER: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedUser = () => ({ type: INITIALIZED_USER})

export const asyncInitializedUser = () => (dispatch) => {
    let promise = dispatch(getProfile(true));
    Promise.all([promise]).then(() => {
        dispatch(initializedUser());
    });
}

export default appReducer;