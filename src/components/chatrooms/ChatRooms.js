import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getChatRooms } from '../../actions/chatRoomsAction'
import { getAllUsers } from '../../actions/authActions'
import { setActiveNode } from '../../actions/chatRoomsAction'
import { chatRoomsArray } from '../../actions/chatRoomsAction'
import loader from '../../assets/loader.gif'
import Moment from 'react-moment' 


class ChatRooms extends Component {
    
    
    constructor(props){
        super(props);
       
        this.state = {
            activeChatNode : null,
            loading: true,
           
        }
    }
 
    componentWillMount(){
        this.props.getChatRooms();
    }
    
    componentDidMount(){
        setTimeout(() =>{
            console.log(this.props.chatRooms, "didmount props");

        },1500)
    }
    componentWillReceiveProps(props){
    }
   
activeNode = (value) =>{
    let node = `pc-${value.first_number}-${value.second_number}`;
        this.props.setActiveNode(node);
    } 

    
    
    render() {

        console.log(this.props.activeNode,"Props Active ")
        return(
       <div className="inbox_people">
                <div className="headind_srch">
                    <div className="recent_heading">
                        <h4>Recent</h4>
                    </div>
                    <div className="srch_bar">
                        <div className="stylish-input-group">
                            <input type="text" className="search-bar"  placeholder="Search" />
                            <span className="input-group-addon">
                                <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                            </span> 
                        </div>
                    </div>
                </div>
                <div className="inbox_chat">
                    {
                        this.props.loading  ? 
                        <img src={loader} className='text-center' style={{ width : '100% ' , height : 'auto' }} /> : 
                        this.props.chatRooms.length >= 1 ? 
                        this.props.chatRooms.map(function(value,index){
                            let node = `pc-${value.first_number}-${value.second_number}`;
                            console.log(node,index )
                           
                            return(
                                    <div key={index} className={typeof this.props.activeNode !== 'null' &&   
                                                    this.props.activeNode == node ?
                                                    'chat_list active_chat' : 'chat_list' } onClick={()=>this.activeNode(value) }>
                                    <div className="chat_people">
                                        <div className="chat_img"> 
                                            <img src={value.image} alt="sunil"/> 
                                        </div>
                                        <div className="chat_ib">
                                            <h5>{value.name}<span className="chat_date"><Moment format="YYYY/MM/DD" date={value.messageTime} /></span></h5>
                                            <p>{value.lastMessage}</p>
                                        </div>
                                        
                                        
                                    </div>
                                </div>

                            )
                        },this) : 
                            <div className= 'chat_list active_chat' >
                            <div className="chat_people">
                                <h3>Records Not Found</h3> 
                            </div>
                        </div>
                    } 
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ( 
    console.log(state, "state"),
{
    //message : state.message;
    auth : state.auth,
    //loading : state.chatRooms.loading,
   chatRooms : state.chatRooms.chatRooms,
   loading : state.chatRooms.loading,
   activeNode : state.chatRooms.activeNode

  }
  )
//   console.log(mapStateToProps);
  
export default connect(mapStateToProps, {setActiveNode,getAllUsers,getChatRooms})(ChatRooms);

//export default ChatRooms;