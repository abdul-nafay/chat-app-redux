import {SEND_MESSAGE} from './types';

export const sendMessage = (currentMessage) => {
    return({
        type : SEND_MESSAGE,
        payload : currentMessage
    })
}
