import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { fieldIsRequired, maxLengthValid } from '../../utilities/FormValidator';
import { Textarea } from '../../common/FormElements/FormElements';

let maxLengthMessage = maxLengthValid(15);

const MyPosts = (props) => {

    let posts = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let addPost = (data) => {
        props.addPost(data.messagePost);
    }

    return (<div>
        <h3>My posts</h3>
        <div>
            <AddMessagePostReduxForm onSubmit={addPost} />
        </div>
        <div className={s.posts}>
            {posts}
        </div>
    </div>);
}

const addMessagePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"messagePost"} component={Textarea} validate={[fieldIsRequired, maxLengthMessage]}/>
            <button>Add post</button>
        </form>
    )
}

const AddMessagePostReduxForm = reduxForm({form: "addMessageFormPostProfile"})(addMessagePostForm);

export default MyPosts;