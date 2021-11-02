import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    messagesPage: profileReducer
});

let store = createStore(reducers);

export default store;