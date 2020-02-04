import {
    ADD_OPEN_CARDS,
    REMOVE_OPEN_CARDS,
    UPDATE_CARD,
    ADD_MATCHES_FOUND,
    SET_STATE_CARDS_DEFAULT,
    SET_STATE_CARDS_SHUFFLED,
    SET_OPACITY_CARDS
} from "../../actions/cards";

import {
    addOpenCardsUtil,
    generatedArrayCardsUtil,
    removeOpenCardsUtil,
    shuffledCardsUtil,
    updateCardsUtil
} from "../../../utils/cards";

const initialContent = [...generatedArrayCardsUtil()];

export const initialState = {
    cards: [...initialContent],
    openCards: [],
    matchesCount: 0,
    opacityCards: false,
}

export function cardsReducers(state = initialState, action) {

    const cards = [...state.cards];
    let newCard = {};
    let newCards = [];

    const openCards = [...state.openCards];
    let newOpenCards = [];

    const matchesCount = state.matchesCount;

    let opacityCards = 0;

    switch (action.type) {

        case UPDATE_CARD:

            newCard = action.data;
            newCards = updateCardsUtil(cards, newCard);

            return {
                ...state,
                ...{
                    cards: newCards
                }
            }

        case ADD_OPEN_CARDS:

            newCard = action.data;
            newOpenCards = addOpenCardsUtil(openCards, newCard);

            return {
                ...state,
                ...{
                    openCards: newOpenCards
                }
            }

        case REMOVE_OPEN_CARDS:

            newCard = action.data;
            newOpenCards = removeOpenCardsUtil(openCards, newCard);

            return {
                ...state,
                ...{
                    openCards: newOpenCards
                }
            }

        case ADD_MATCHES_FOUND:

            return {
                ...state,
                ...{
                    matchesCount: matchesCount + 1
                }
            }

        case SET_STATE_CARDS_DEFAULT:

            return {
                ...state,
                ...initialState,
                ...{
                    matchesCount: 0
                }
            }

        case SET_STATE_CARDS_SHUFFLED:

            newCards = shuffledCardsUtil([...cards]);

            return {
                ...state,
                cards: newCards
            }

        case SET_OPACITY_CARDS:

            opacityCards = action.data;

            return {
                ...state,
                opacityCards: opacityCards
            }

        default:
            return state
    }
}