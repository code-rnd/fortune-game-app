import React, {useState} from "react";

import './style.scss';

export default function AddUserComponent(props) {

    const {addUser} = props;

    const [isNameUser, setNameUser] = useState('');

    const handleAddUser = () => {
        addUser(isNameUser);
        setNameUser('');
    }

    return (
        <div className={'addUser user users-addUser margin-top20px'}>
            <input type={'text'} placeholder={'new user..'} value={isNameUser} onChange={(e) => {
                setNameUser(e.currentTarget.value)
            }}/>
            <input type={'button'} value={'add user'} onClick={() => {
                handleAddUser()
            }} disabled={!isNameUser || isNameUser === ' '}/>
        </div>
    )
}