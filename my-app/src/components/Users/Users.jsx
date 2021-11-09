import React from 'react';
import styles from './Users.module.css';
import userAnonymysPhoto from '../../img/anonymys.png';

let Users = (props) => {

    let totalPagesValue = Math.ceil(props.totalCount / props.pageSize );
    let pages = [];
    for (let i=1; i<= totalPagesValue; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.blockPaginations}>
                {
                    pages.map(p => {
                        return <span className={p === props.currentPage ? 
                            styles.activeNumber : styles.pageNumber} onClick={(e) => {props.setCurrentPage(p)}}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div><img src={u.photos.small != null ? u.photos.small : userAnonymysPhoto} className={styles.userPhoto} /></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>}
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