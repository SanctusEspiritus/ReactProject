import React from 'react';
import styles from './Users.module.css';
import userAnonymysPhoto from '../../img/anonymys.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../API/api';

let Users = (props) => {

    let totalPagesValue = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= totalPagesValue; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.blockPaginations}>
                {
                    pages.map(p => {
                        return <span className={p === props.currentPage ?
                            styles.activeNumber : styles.pageNumber} onClick={(e) => { props.setCurrentPage(p) }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            
                            <div>
                            <NavLink to={`/profiles/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userAnonymysPhoto} className={styles.userPhoto} />
                            </NavLink>
                            </div>
                            
                            <div>
                                {u.followed
                                    ? <button disabled={props.usersFollowing.some(id => id === u.id)} onClick={() => {
                                        props.unfollowUser(u.id);
                                    }}>Unfollow</button>
                                    : <button disabled={props.usersFollowing.some(id => id === u.id)} onClick={() => {
                                        props.followUser(u.id);
                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>)
            }</div>
    )
}

export default Users;