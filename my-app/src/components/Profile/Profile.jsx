import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (<div>
        <ProfileInfo profile={props.profile} status={props.status} setUserStatus={props.setUserStatus}/>
        <MyPostsContainer />
    </div>);
}

export default Profile;