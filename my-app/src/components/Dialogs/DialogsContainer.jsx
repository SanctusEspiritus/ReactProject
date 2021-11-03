import s from './Dialogs.module.css';
import React from 'react';
import { updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let dialogsPage = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let changeDialogText = (text, isDialog) => {
                    let objAction = updateNewPostTextActionCreator(text, isDialog);
                    store.dispatch(objAction);
                }
                return <Dialogs sendMessage={onSendMessageClick}
                    changeDialogText={changeDialogText}
                    dialogsPage={dialogsPage} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;