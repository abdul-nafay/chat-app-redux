import {SEND_MESSAGE} from '../actions/types'

const initialState = {
    conversation : []
}

export default (state = initialState , action ) => {
    switch(action.type){
        case SEND_MESSAGE:
            return {
                ...state,
                conversation : action.payload
            }
        default: 
            return state;
    }
} 