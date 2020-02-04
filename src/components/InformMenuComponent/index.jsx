import React from "react";
import {IosSwitchContainer} from "../../containers/util/IosSwitchContainer";

import './style.scss';

export default function InformMenuComponent(props) {

    const {setTimer, setStateCardsDefault} = props;
    const {currentUser, timer} = props;

    const handleStopGame = () => {
        // убиваю таймер
        clearInterval(timer.name);
        setTimer({count: 0, name: '', status: false});

        // возвращаю состояние карточек
        // в дефолтный вид
        setStateCardsDefault();
    }

    return (
        <div className={'informMenu'}>
            <div className={'informMenu-button'}>
                <input type={'button'} value={'cancel'} onClick={() => {
                    handleStopGame();
                }}/>
            </div>
            <div className={'informMenu-iosSwitch'}>
                <IosSwitchContainer/>
            </div>
            <div className={'informMenu-timer'}>
                {timer.count} sec.
            </div>
            <div className={'informMenu-userInfo'}>
                {currentUser.name}
                <div className={'informMenu-userInfo-avatar margin-left5px'}>
                    {currentUser.recordTime ? `${currentUser.recordTime} s.` : 'x_X'}
                </div>
            </div>
        </div>
    )
}