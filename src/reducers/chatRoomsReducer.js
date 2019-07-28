import {FETCH_CHATROOMS, LOADING_START, LOADING_END , ACTIVE_NODE} from '../actions/types'

const initialState = {
    chatRooms : [],
    loading : false,
    activeNode : null 
}

export default (state = initialState , action ) => {
    switch(action.type){
        case FETCH_CHATROOMS:
            let  chatRooms = [...state.chatRooms];
            chatRooms.push(action.payload)
            return {
                ...state,
                chatRooms,
                loading: false
            }
            case LOADING_START:
            return {
                ...state,
                loading : true
            }
            case LOADING_END:
            return {
                ...state,
                loading : false
            }
            case ACTIVE_NODE:
                    return {
                        ...state,
                        activeNode :action.payload
                    }
        default: 
            return state;
    }
} 