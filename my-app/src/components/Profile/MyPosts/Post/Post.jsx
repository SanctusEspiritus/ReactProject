import s from './Post.module.css';

const Post = (props) => {
    return (<div className={s.item}> 
                {props.message}
                <div>
                    Likes: {props.likesCount}
                </div>
            </div>);
}

export default Post;