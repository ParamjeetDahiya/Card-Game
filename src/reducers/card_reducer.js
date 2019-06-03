const initialState = {
    cards:[]
}


export default function (state = initialState, action) {
    

    
    
    switch (action.type) {

        case 'SHUFFLE_CARDS':
            return{...state,state:{cards:action.payload}} 
        case 'REMOVE_CARD':
            return{...state,cards:action.payload}
        default:
            return {state};
    }
}