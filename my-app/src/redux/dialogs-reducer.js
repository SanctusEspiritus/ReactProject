const CHANGE_POST = 'CHANGE-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POST:
            if (action.thisIsDialog) {
                state.dialogText = action.textPost;
            }
            return state;
        case SEND_MESSAGE:
            let body = state.dialogText;
            let objMessage = {
                id: 6,
                message: body
            }
            state.dialogText = '';
            state.messagesData.push(objMessage);
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer;