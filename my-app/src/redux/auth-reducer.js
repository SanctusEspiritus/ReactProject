import { headerAPI } from "../API/api";

const SET_USER_LOGIN = 'ADD-SET_USER_LOGIN';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN: {
            return {
                ...state,
                ...action.data,
                isAuth: action.loginned
            }
        }
        default:
            return state;
    }
}

export const authUser = (data, loginned) => ({ type: SET_USER_LOGIN, data , loginned})

export const getProfile = () => { 
    return (dispatch) => {
        headerAPI.getProfile().then(data => {
            let loginned = false; 
            if (data.resultCode === 0) loginned = true; 
            dispatch(authUser(data.data, loginned));
        });
}}

export default authReducer;