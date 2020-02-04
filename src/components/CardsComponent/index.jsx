import React, {useEffect} from "react";
import {CardContainer} from "../../containers/CardComponent";
import {convertArr} from "../../utils/convertCards";

import './style.scss';

export default function CardsComponent(props) {

    const {cards, openCards, matchesCount} = props;

    const {setTimer, name, count} = props;

    const {updateUser} = props;

    const {setStateCardsDefault} = props;

    useEffect(() => {
        if (matchesCount !== cards.length) {
            return
        }

        handleStopGame();
    }, [matchesCount])

    const handleStopGame = () => {
        // если все карты разгаданы
        // обновляю результаты текущего пользователя
        updateUser({recordTime: count});

        // убиваю таймер
        clearInterval(name);
        setTimer({count: 0, name: '', status: false});

        // возвращаю состояние карточек
        // в дефолтный вид
        setStateCardsDefault();
    }

    // пока не закроются открытые карты
    // все остальные карты - заблокированы
    const handleSetHiddenCard = () => {
        if (openCards.length < 2) {
            return false;
        }

        return true;
    }

    return (
        <div className={'cards margin-top20px'}>
            <table>
                <tbody>
                {
                    convertArr(cards, 6).map((element, index) => (
                        <tr key={index}>
                            {element.map((card, i) => (
                                <td key={i}>
                                    <CardContainer card={card} isDisabled={handleSetHiddenCard()}/>
                                </td>
                            ))}
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}