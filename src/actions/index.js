export function shuffleCards() {
    const cardtype = ['Cat','Defuse','Shuffle','Explode']
    let arr = [];
        for (let i = 0; i < 5; i++) {
            const num = Math.floor((Math.random() * 4) + 1);
            arr.push(cardtype[num-1])
        }
    
    return {
        type: 'SHUFFLE_CARDS',
        payload:arr
    }
}
export function removeCard(getState) {
    let arr = getState;
    arr.pop();
    return {
        type: 'REMOVE_CARD',
        payload:arr
    }
    
}
