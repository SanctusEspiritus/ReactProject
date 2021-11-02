import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (<div>
        <ProfileInfo />
        <MyPosts postData={props.state.postData} dispatch={props.dispatch} newPostText={props.state.newPostText}/>
    </div>);
}

export default Profile;