import React from 'react';
import MyPosts from './MyPosts';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let posts = state.messagesPage.postData;
                let addPost = () => {
                    let objAction = addPostActionCreator();
                    store.dispatch(objAction);
                };
                let changePost = (text, isDialog) => {
                    let objAction = updateNewPostTextActionCreator(text, isDialog);
                    store.dispatch(objAction);
                };

                return <MyPosts
                    changePost={changePost}
                    addPost={addPost}
                    posts={posts}
                    newPostText={state.messagesPage.newPostText} />
            }
            }
        </StoreContext.Consumer>);
}

export default MyPostsContainer;