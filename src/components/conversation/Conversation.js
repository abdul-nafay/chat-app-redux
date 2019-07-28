import React, { Component } from 'react';

import {connect} from 'react-redux'

//import { registerUser } from '../../actions/authActions'
import { sendMessage } from '../../actions/messageAction'


class  Conversation extends Component {

    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = 
        {
            messageText : "",
            conversation : [
                // {
                //     image : "https://ptetutorials.com/images/user-profile.png",
                //     messageContent: "dummy Text , Messagee  Receiving!",
                //     messageType: "incoming",
                //     messageTime : new Date()
                // },

                // {
                //     image : "https://ptetutorials.com/images/user-profile.png",
                //     messageContent: "dummy Text , Message Sending!",
                //     messageType: "outgoing",
                //     messageTime : new Date()
                // },

                // {
                //     image : "https://ptetutorials.com/images/user-profile.png",
                //     messageContent: "dummy Text , Messagee  Receiving!",
                //     messageType: "incoming",
                //     messageTime : new Date()
                // },
                // {
                //     image : "https://ptetutorials.com/images/user-profile.png",
                //     messageContent: "Incoming Brother",
                //     messageType: "incoming",
                //     messageTime : new Date()
                // },
                {
                    image : "https://ptetutorials.com/images/user-profile.png",
                    messageContent: "dummy Text , Messagee  Receiving",
                    messageType: "incoming",
                    messageTime : new Date()
                },

                {
                    image : "https://ptetutorials.com/images/user-profile.png",
                    messageContent: "dummy Text , Message Sending!",
                    messageType: "outgoing",
                    messageTime : new Date()
                },
                {
                    image : "https://ptetutorials.com/images/user-profile.png",
                    messageContent: "dummy Text ,Messagee  Receiving!",
                    messageType: "incoming",
                    messageTime : new Date()
                }

            ]
        }
    }

    handleChange(event) {
        this.setState({messageText: event.target.value});
        console.log(event.target.value)
        
      }

    handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    console.log("Submit Pressed: ",this.state.messageText)
    
    
    if(this.state.messageText != ""){    
        var obj = {
            
                image : "https://ptetutorials.com/images/user-profile.png",
                messageContent: this.state.messageText,
                messageType: "outgoing",
                messageTime : new Date()
            }

        
    var joined = this.state.conversation.concat(obj);
    this.setState({conversation : joined})
    
   // event.preventDefault();

    this.props.sendMessage(joined);
    event.preventDefault(); 
    
    
    
    this.state.messageText = ""
    
    }else
    {
      alert("Enter a message !")
      event.preventDefault();
    }
      
    
    
    }

    render() {
        return (
            <div className="mesgs">
                <div className="msg_history">



                {
                        this.state.conversation.map(function(value,index){
                        
                            if(value.messageType === 'incoming'){
                                return(
                                    <div key={index} className="incoming_msg"> 
                                        <div className="incoming_msg_img"> 
                                            <img src={value.image} alt="sunil"/> 
                                        </div>
                                        <div className="received_msg">
                                            <div className="received_withd_msg">
                                            <p>{value.messageContent}</p>
                                            <span className="time_date">{value.messageTime.toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else{
                                return(
                                    <div key={index} className="outgoing_msg">  
                                        <div className="sent_msg">
                                            <p>{value.messageContent}</p>
                                            <span className="time_date"> {value.messageType}</span> 
                                        </div>
                                    </div> 
                                )
                            }
                    }, this)
                }
                    <form onSubmit={this.handleSubmit}>
                        <div className="type_msg">
                            <div className="input_msg_write">
                                <input type="text" className="write_msg" placeholder="Type a message" value={this.state.messageText} onChange={this.handleChange} />
                                <button className="msg_send_btn" type="submit"><i className="fas fa-paper-plane" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  // /message : state.message;
  //auth : state.auth,
  message : state.message
})

export default connect(mapStateToProps, {sendMessage})(Conversation);
//export default Conversation;