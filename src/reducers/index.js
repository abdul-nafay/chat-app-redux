import {combineReducers} from 'redux'
import authReducer from './authReducer'
import messageReducer from './messageReducer'
import chatRoomsReducer from './chatRoomsReducer'

export default combineReducers({
    auth : authReducer,
    message : messageReducer,
    chatRooms : chatRoomsReducer
})