export function cardDetails() {
    return {
        type: 'CARD_DETAILS',
        payload:null
    }
}
export function cards(getvalue) {
    return {
        type: 'CARDS',
        payload:getvalue
    }
}