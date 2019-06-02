export default function(state={},action){
    switch (action.type) {

        case 'GET_CARD ':
            return{...state} 
        case 'CARDS':
            return{}
        default:
            return state;
    }
}