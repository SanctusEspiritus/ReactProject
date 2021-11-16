import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "34d129b3-1634-4b80-82dd-93a7962ecaa8"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data });
    },
    deleteUser(id = 1) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    followUser(id = 1) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}

export const headerAPI = {
    getProfile() {
        return instance.get(`auth/me`)
            .then(response => { return response.data; });
    }
}

export const userProfile = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => { return response.data; });
    }
}