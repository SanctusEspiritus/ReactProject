import { usersAPI } from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    usersFollowing: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state, usersFollowing: action.isFetching ? 
                [...state.usersFollowing, action.userId] : 
                state.usersFollowing.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId });

export const getUsers = (currentPage, pageSize) => { 
    return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    });
}}

export const followUser = (userId) => { 
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
                dispatch(toggleIsFollowing(false, userId));
            }      
        }); 
}}

export const unfollowUser = (userId) => { 
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        usersAPI.deleteUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
                dispatch(toggleIsFollowing(false, userId));
            }      
        }); 
}}

export default usersReducer;