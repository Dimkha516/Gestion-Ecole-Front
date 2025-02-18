const initialState = {};

export default function filieresReducer(state = initialState, action){
    switch(action.type){
        case 'GET_FILIERES':
            return action.payload;
        default:
            return state;
    }
}