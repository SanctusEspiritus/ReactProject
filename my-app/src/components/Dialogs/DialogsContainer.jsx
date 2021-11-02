import s from './Dialogs.module.css';
import React from 'react';
import { updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let dialogsPage = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let changeDialogText = (text, isDialog) => {
        let objAction = updateNewPostTextActionCreator(text, isDialog);
        props.store.dispatch(objAction);
    }

    return (
        <Dialogs sendMessage={onSendMessageClick}
            changeDialogText={changeDialogText}
            dialogsPage={dialogsPage} />
    )
}

export default DialogsContainer;