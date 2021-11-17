import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (<div>
        <div>
            <img src="https://www.kalimbatutorials.com/wp-content/uploads/2021/02/Call-Of-Silence-Attack-On-Titans-By-Shingeki-No-Kyojin-Kalimba-Tabs-1-e1614413109584.jpg" />
        </div>
        <div>
            <div>
                <img src={props.profile.photos.small}/>
            </div>
            <div>
                <p>Подписывайтесь на мой инстаграмм - {props.profile.contacts.instagram}</p>
            </div>
            <ProfileStatus status={"runnaway"}/>
        </div>
    </div>);
}

export default ProfileInfo;