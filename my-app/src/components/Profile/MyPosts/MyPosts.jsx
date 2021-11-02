import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let posts = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let newPostRefferense = React.createRef();

    let addPost = () => {
        let objAction = addPostActionCreator();
        props.dispatch(objAction);
    }

    let changePost = () => {
        const text = newPostRefferense.current.value;
        let objAction = updateNewPostTextActionCreator(text, false);
        props.dispatch(objAction);
    }
    
    return (<div>
        <h3>My posts</h3>
        <div>
            <textarea onChange={changePost} ref={newPostRefferense} value={props.newPostText}/>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {posts}
        </div>
    </div>);
}

export default MyPosts;