import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { fieldIsRequired, maxLengthValid } from '../../utilities/FormValidator';
import { Textarea } from '../../common/FormElements/FormElements';

let maxLengthMessage = maxLengthValid(15);

class MyPosts extends React.Component {

    /* ничего не изменится, поскольку уже пофикшено разработчиками (написано чисто для практики) */
    shouldComponentUpdate(prevProps, prevState) {
        return prevProps != this.props || prevState != this.state;
    }

    addPost = (data) => {
        this.props.addPost(data.messagePost);
    }

    render() {
        let posts = this.props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
        return <div>
            <h3>My posts</h3>
            <div>
                <AddMessagePostReduxForm onSubmit={this.addPost} />
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>;
    }
}

const addMessagePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"messagePost"} component={Textarea} validate={[fieldIsRequired, maxLengthMessage]} />
            <button>Add post</button>
        </form>
    )
}

const AddMessagePostReduxForm = reduxForm({ form: "addMessageFormPostProfile" })(addMessagePostForm);

export default MyPosts;