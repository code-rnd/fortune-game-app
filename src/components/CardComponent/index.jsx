import React, {useEffect} from "react";
import {compareTwoValuesInArray} from "../../utils/cards";

import './style.scss';

export default function CardComponent(props) {

    const {card, openCards, opacityCards} = props;

    const {isDisabled} = props;
    const {img, isOpen, hidden} = card;

    const {updateCard, addMatchesFound} = props;
    const {addOpenCards, removeOpenCards} = props;

    useEffect(() => {

        // если открыто меньше двух карт,
        // то выхожу из юзээффекта
        if (openCards.length < 2) {
            return;
        }

        // если карта закрыта,
        // то выхожу из юзэффекта
        if (!isOpen) {
            return;
        }

        // если карты не равны,
        // то закрываю обе обратно
        if (!compareTwoValuesInArray(openCards, 'data')) {
            setTimeout(() => {
                handleClosedCard();
            }, 300)

            return;
        }

        // если карты равны
        // то делаю их скрытыми
        setTimeout(() => {
            openCards.map(item => {
                if (item.id === card.id) {
                    handleSetHidden();
                }
            })
        }, 500)
    }, [openCards])

    const handleOpenCard = () => {
        updateCard({...card, isOpen: true});
        addOpenCards(card);
    }

    const handleClosedCard = () => {
        updateCard({...card, isOpen: false});
        removeOpenCards(card);
    }

    const handleSetHidden = () => {
        updateCard({...card, isOpen: false, hidden: true});
        removeOpenCards(card);
        addMatchesFound();
    }

    const handleGetDisabledStatus = () => {
        if (isDisabled || isOpen) {
            return true;
        }

        return false
    }

    return (
        <div className={`card ${hidden && 'card-hidden'}`} onClick={() => {
            handleOpenCard();
        }} disabled={handleGetDisabledStatus() || opacityCards}>
            <div className={`card-img ${!isOpen && 'card-opacity0'} ${opacityCards && 'card-opacity05'}`}
                 style={{backgroundImage: `url('./media/cards/img/${img}')`}}/>
        </div>
    )
}