import { stopSubmit } from "redux-form";
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

export const authUser = (data, loginned) => ({ type: SET_USER_LOGIN, data, loginned })

export const getProfile = (loginned = false) => (dispatch) => {
    return headerAPI.getProfile().then(data => {
        if (data.resultCode === 0) {
            dispatch(authUser(data.data, loginned));
        }
    });
}

export const loginIn = (email, password, rememberMe) => {
    return (dispatch) => {
        headerAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getProfile(true));
            } else {
                dispatch(stopSubmit("login", { _error: data.data.messages[0] }));
            }
        });
    }
}

export const loginOut = () => {
    return (dispatch) => {
        headerAPI.logout().then(data => {
            if (data.resultCode === 0) dispatch(getProfile());
        });
    }
}

export default authReducer;