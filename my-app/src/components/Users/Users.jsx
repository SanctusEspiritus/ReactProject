import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1, photoUrl: 'https://cdn141.picsart.com/303942258020211.png', followed: true, fullName: "Bohdan", status: 'Because im born in this world',
            location: { city: 'Kyiv', country: 'Ukraive' }
        },
        {
            id: 2, photoUrl: 'https://cdn141.picsart.com/303942258020211.png', followed: false, fullName: "Vasya", status: 'this is curious',
            location: { city: 'Kharkiv', country: 'Ukraive' }
        },
        {
            id: 3, photoUrl: 'https://cdn141.picsart.com/303942258020211.png', followed: true, fullName: "Vladimir", status: 'we will study',
            location: { city: 'Sumy', country: 'Ukraive' }
        }]);
    }

    return (
        <div>{
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div><img src={u.photoUrl} className={styles.userPhoto}/></div>
                        <div>
                            {u.followed 
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> 
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
        }</div>
    )
}

export default Users;