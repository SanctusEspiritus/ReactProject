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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: action.message }]
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (message) => ({ type: SEND_MESSAGE, message })

export default dialogsReducer;