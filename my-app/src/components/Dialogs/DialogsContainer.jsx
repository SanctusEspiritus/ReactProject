import s from './Dialogs.module.css';
import React from 'react';
import { updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        changeDialogText: (text, isDialog) => {
            let objAction = updateNewPostTextActionCreator(text, isDialog);
            dispatch(objAction);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;