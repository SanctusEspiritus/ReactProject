const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        /*{
            id: 1, photoUrl: 'https://cdn141.picsart.com/303942258020211.png', followed: true, fullName: "Bohdan", status: 'Because im born in this world',
            location: { city: 'Kyiv', country: 'Ukraive' }
        },
        {
            id: 2, photoUrl: 'https://cdn141.picsart.com/303942258020211.png', followed: false, fullName: "Vasya", status: 'this is curious',
            location: { city: 'Kharkiv', country: 'Ukraive' }
        },
        {
            id: 3, photoUrl: 'https://cdn141.picsart.com/303942258020211.png', followed: true, fullName: "Vladimir", status: 'we will study',
            location: { city: 'Sumy', country: 'Ukraive' }
        }*/
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: 
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;