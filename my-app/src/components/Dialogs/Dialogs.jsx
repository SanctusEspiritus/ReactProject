import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {updateNewPostTextActionCreator} from '../../redux/profile-reducer';
import {sendMessageCreator} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let dialogs = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messages = props.state.messagesData.map(message => <Message message={message.message} />);
    let dialogText = props.state.dialogText;
    
    let refferenseDialog = React.createRef();

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let changeDialogText = () => {
        let text = refferenseDialog.current.value;
        let objAction = updateNewPostTextActionCreator(text, true);
        props.dispatch(objAction);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
                <div>
                    <div> <textarea ref={refferenseDialog} onChange={changeDialogText} value={dialogText}/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;