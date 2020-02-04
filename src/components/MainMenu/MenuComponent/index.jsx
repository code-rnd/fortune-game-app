import React from "react";
import {UsersContainer} from "../../../containers/MainMenu/UsersContainer";
import {AddUserContainer} from "../../../containers/MainMenu/AddUserContainer";

import './style.scss';

export default function MainMenuComponent() {

    return (
        <div className={'mainMenu'}>
            <div className={'mainMenu-label'}>
                Users
            </div>
            <UsersContainer/>
            <AddUserContainer/>
        </div>
    )
}