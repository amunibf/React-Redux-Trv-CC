import { FETCH_POST, NEW_POST} from '../actions/type'

const initialState = {
    items : [],
    item : {}
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_POST:
            console.log('reducer')
            return {
                ...state,
                items : action.payload
            }
        case NEW_POST:
            console.log('reducer')
            return {
                ...state,
                item : action.payload
            }
        default:
           return state
    }
}