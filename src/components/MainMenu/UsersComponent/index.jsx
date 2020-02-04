import React from "react";
import {UserContainer} from "../../../containers/MainMenu/UserContainer";
import {getSortedUsersUtil} from "../../../utils/users";

import './style.scss';

export default function UsersComponent(props) {

    const {users} = props;

    return (
        <div className={'users'}>
            {
                getSortedUsersUtil([...users]).map((user, key) => (
                    <UserContainer user={user} rating={(key + 1)} key={key}/>
                ))
            }
        </div>
    )
}