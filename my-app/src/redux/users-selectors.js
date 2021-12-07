import { createSelector } from "reselect";

const getUsersArray = (state) => {
    return state.usersPage.users;
}

export const getUsersArraySelector = createSelector(getUsersArray, (users) => {
    return users.filter(user => true);
}) 

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getUsersFollowing = (state) => {
    return state.usersPage.usersFollowing;
}
