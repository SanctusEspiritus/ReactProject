import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { fieldIsRequired, maxLengthValid } from '../utilities/FormValidator';
import { Textarea } from '../common/FormElements/FormElements';

const maxLength = maxLengthValid(15);
const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messages = props.dialogsPage.messagesData.map(message => <Message message={message.message} />);

    let onSendMessageClick = (data) => {
        props.sendMessage(data.message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
                <AddReduxMessageForm onSubmit={onSendMessageClick}/>
            </div>
            
        </div>
    )
}


const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div> <Field name={"message"} component={Textarea} validate={[fieldIsRequired, maxLength]}/></div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddReduxMessageForm = reduxForm({form: "addMessageForm"})(addMessageForm);

export default Dialogs;