import React from "react";
import {CardsContainer} from "../../containers/CardsContainer";
import {InformMenuContainer} from "../../containers/InformMenuContainer";
import MainMenuComponent from "../MainMenu/MenuComponent";

import './style.scss';

export default function WidjetComponent(props) {

    const {status} = props;

    const getFormMenu = () => {
        return (
            <div className={'widjet margin-top20px'}>
                <MainMenuComponent/>
            </div>
        )
    }

    const getFormGame = () => {
        return (
            <div className={'widjet margin-top20px'}>
                <InformMenuContainer/>
                <CardsContainer/>
            </div>
        )
    }

    return (
        <div className={'widjet-container'}>
            Fortune-game
            {status ? getFormGame() : getFormMenu()}
        </div>
    )
}
