import {REGISTER_USER} from './types';
import fire from '../config'

export const registerUser = (userData) => {
    return{
        type : REGISTER_USER,
        payload : userData
    }
}

export const getAllUsers = () => {
    return(dispatch, getState) => {
    var usersArray = [];
    var db = fire.database().ref().child('users');

    db.on('child_added',(snapshot) => {
        usersArray.push(snapshot.val());
    });
     
     setTimeout(()=>{
        dispatch({
            type : REGISTER_USER,
            payload : usersArray
        })
        console.log(getState())
     },2000);
    }
}