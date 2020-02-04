export const UPDATE_CARD = "UPDATE_CARD";
export const ADD_OPEN_CARDS = "ADD_OPEN_CARDS";
export const REMOVE_OPEN_CARDS = "REMOVE_OPEN_CARDS";
export const ADD_MATCHES_FOUND = "ADD_MATCHES_FOUND";
export const SET_STATE_CARDS_DEFAULT = "SET_STATE_CARDS_DEFAULT";
export const SET_STATE_CARDS_SHUFFLED = "SET_STATE_CARDS_SHUFFLED";
export const SET_OPACITY_CARDS = "SET_OPACITY_CARDS";

export const updateCard = card => ({
    type: UPDATE_CARD,
    data: card
});

export const addOpenCards = card => ({
    type: ADD_OPEN_CARDS,
    data: card
});

export const removeOpenCards = card => ({
    type: REMOVE_OPEN_CARDS,
    data: card
});

export const addMatchesFound = () => ({
    type: ADD_MATCHES_FOUND,
});

export const setStateCardsDefault = () => ({
    type: SET_STATE_CARDS_DEFAULT
});

export const setStateCardsShuffled = () => ({
    type: SET_STATE_CARDS_SHUFFLED
});

export const setOpacityCards = flag => ({
    type: SET_OPACITY_CARDS,
    data: flag
})