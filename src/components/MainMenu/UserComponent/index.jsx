import React from "react";

import './style.scss';

export default function UserComponent(props) {

    const {user, rating} = props;
    const {name, recordTime} = user;

    const {setCurrentUser, setStateCardsShuffled} = props;

    const {setTimer} = props;

    const handleStartGame = () => {

        // перемешиваю карыт в массиве
        setStateCardsShuffled();

        // записываю статус секундомера,
        // как активный
        let count = 0;
        setTimer({status: true});

        // запускаю секундомер
        const timer = setInterval(() => {
            count = count + 1;
            setTimer({name: timer, status: true, count: count})
        }, 1000)

        // записываю текущего пользовтеля,
        // как текущего
        setCurrentUser(user);
    };

    return (
        <div className={'user margin-top20px'}>
            <div className={'user-rating user-name'}>
                {rating}) {name}
            </div>
            <div className={'user-recordTimer'}>
                {recordTime ? `record: ${recordTime} sec.` : 'no result'}
            </div>
            <div className={'user-startGame'}>
                <input type={'button'} value={'start'} onClick={() => {
                    handleStartGame()
                }}/>
            </div>
        </div>
    )
}