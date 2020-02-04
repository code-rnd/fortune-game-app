// ищем нужный элемент
// заменяем его на новый-актуальный
// возрващаем обновленный массив
export const updateCardsUtil = (cards, card) => {

    if (!cards || !card) {
        return ['null'];
    }

    let newCards = [...cards];

    [...cards].map((item, index) => {
        if (item.id === card.id) {
            newCards[index] = {...item, ...card}
        }
    })

    return newCards;
}

// добавляем в массив открытых карт - новую открытую карту
export const addOpenCardsUtil = (openCards, card) => {
    if (!openCards || !card) {
        return [];
    }

    const newCard = {...card};
    const newOpenCards = [...openCards, newCard];

    return newOpenCards;
}

// удаляем из массива открытых карт - карту, которая закрылась
export const removeOpenCardsUtil = (openCards, card) => {
    if (!openCards || !card) {
        return [];
    }

    const newOpenCards = [...openCards];

    [...openCards].map((item, index) => {
        if (item.id === card.id) {
            newOpenCards.splice(index, 1);
        }
    })

    return newOpenCards;
}

// сравниваем два элемента по ключу
// возвращаем true или false
export const compareTwoValuesInArray = (openCards, key) => {
    if (!openCards || openCards.length < 2) {
        return false;
    }

    const newOpenCards = [...openCards];
    let comparisonResult = false;

    if (newOpenCards[0][key] === newOpenCards[1][key]) {
        comparisonResult = true;
    }

    return comparisonResult;
}

export const compareValueInArrays = (openCards, card) => {
    if (!openCards || !card) {
        return false;
    }

    let result = false;

    openCards.map(openCard => {
        if (openCard.id === card.id) {
            result = true;
        }
    })

    return result;
}

export const randomUtil = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export const shuffledCardsUtil = (array) =>
    [...array].sort(() => {
        return Math.random() - 0.5;
    });

// генерирую массив карт
export const generatedArrayCardsUtil = (n = 18) => {
    let cards = [];

    for (let i = 0; i < n; i++) {
        cards.push({
            data: `data-${i}`,
            img: `${i}.jpg`,
            isOpen: false,
            hidden: false
        })
    }

    cards = [...cards, ...cards];

    [...cards].map((item, id) => {
        cards[id] = {id: id, ...cards[id]}
    })

    return cards;
}