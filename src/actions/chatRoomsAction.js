import {FETCH_CHATROOMS, LOADING_START,LOADING_END, ACTIVE_NODE} from './types';
import fire from '../config'
import _ from 'lodash'

export const getChatRooms = () => {
    return(dispatch, getState) => {
        dispatch({
            type: LOADING_START
        })
    var db = fire.database().ref().child('chat-rooms');
    

    db.on('child_added',(snapshot) => {
        dispatch({
            type : FETCH_CHATROOMS,
            payload : snapshot.val()
        })
    });
    
    }
}

export const setActiveNode = (node) =>{
   
    return{ 
        type : ACTIVE_NODE,
        payload :node
    }
}

