// конвертируем одномерный массив
// в n - мерный массив
// в данном случае, это нужно для отрисовки таблицы n * n
export const convertArr = (cards, n) => {

    let newCards = [];
    let count = -1;

    [...cards].map((card, id) => {

        if ((id % n)) {
            newCards[count] = [...newCards[count], card]
        } else {
            count = count + 1;
            newCards = [...newCards, []]
            newCards[count] = [...newCards[count], card]
        }
    })

    return newCards;
}