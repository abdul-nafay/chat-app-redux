import React, { Component } from 'react';
import ChatRooms from '../chatrooms/ChatRooms';
import Conversation from '../conversation/Conversation'


class MainContent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="messaging">
                    <ChatRooms/>
                    <Conversation/>
                </div>
            </div>
        );
    }
}

export default MainContent;