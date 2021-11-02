import React from 'react';
import MyPosts from './MyPosts';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

    let state = props.store.getState();
    let posts = state.messagesPage.postData;

    let addPost = () => {
        let objAction = addPostActionCreator();
        props.store.dispatch(objAction);
    }

    let changePost = (text, isDialog) => {
        let objAction = updateNewPostTextActionCreator(text, isDialog);
        props.store.dispatch(objAction);
    }

    return (<MyPosts
        changePost={changePost}
        addPost={addPost}
        posts={posts}
        newPostText={state.messagesPage.newPostText} />);
}

export default MyPostsContainer;