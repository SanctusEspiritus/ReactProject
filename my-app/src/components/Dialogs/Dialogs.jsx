import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messages = props.dialogsPage.messagesData.map(message => <Message message={message.message} />);
    let dialogText = props.dialogsPage.dialogText;
    
    let refferenseDialog = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let changeDialogText = () => {
        let text = refferenseDialog.current.value;
        props.changeDialogText(text, true);
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