import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let posts = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let newPostRefferense = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let changePost = () => {
        const text = newPostRefferense.current.value;
        props.changePost(text, false);
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