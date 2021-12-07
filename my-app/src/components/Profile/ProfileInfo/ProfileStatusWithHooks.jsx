import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editStatus, setEditStatus] = useState(false);
    let [status, setStatus] = useState(props.status);

    const changeEditStatus = () => {
        setEditStatus(true);
    }

    const unchangeEditStatus = () => {
        setEditStatus(false);
        props.setUserStatus(status);
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editStatus &&
                <div>
                    <span onDoubleClick={changeEditStatus}>{status || "u use 20 requests"}</span>
                </div>
            }
            {editStatus &&
                <div>
                    <input onChange={onChangeStatus} autoFocus={true}
                        onBlur={unchangeEditStatus} value={status} />
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;