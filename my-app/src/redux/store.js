import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Bohdan" },
        { id: 2, name: "Anton" },
        { id: 3, name: "Kirill" },
        { id: 4, name: "Tarik" },
        { id: 5, name: "Soroka" },
        { id: 6, name: "Vovan" },
        { id: 7, name: "Gistorgun" }
      ],
      messagesData: [
        { id: 1, message: "Well well well" },
        { id: 2, message: "for long time ago" },
        { id: 3, message: "so breathe!" }
      ],
      dialogText: 'Hey, you take more power?'
    },
    messagesPage: {
      postData: [
        { id: 1, message: "Who cares, if you exist?", likesCount: 15 },
        { id: 2, message: "You came all this way just for that", likesCount: 1 }
      ],
      newPostText: 'Universe'
    }
  },
  getStore(){
    return this._state;
  },
  _rerenderAllTree () {
  },
  subscribe(observer){
    this._rerenderAllTree = observer;
  },
  dispatch(action){

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.messagesPage = profileReducer(this._state.messagesPage, action);
    this._rerenderAllTree(this._state);

  }
}

export default store;