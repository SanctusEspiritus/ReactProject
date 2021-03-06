import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => {
            let objAction = addPostActionCreator(message);
            dispatch(objAction);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;