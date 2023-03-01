import React, {useState,useEffect} from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import './ChatPage.css'
import { ChatState } from '../context/ContextProvider.jsx';


const ChatPage = () => {
  const {userName, roomNo, socket} = ChatState();
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  

const send = async () => {
  if(!message){
    alert("PLEASE ENTER A MESSAGE")
  }
  const msgData = {
    user: userName,
    room: roomNo,
    message: message,
    time: new Date(Date.now()).getHours() + ":" +  new Date(Date.now()).getMinutes()
  }
  await socket.emit("send_message", msgData)
  setMessage('')
  setMessageList((message) => [...message, msgData])

 
}

useEffect(() => {

  socket.on('receive_message', (data) => {
    console.log(data)
    setMessageList((message) => [...message, data])
  })
}, [socket])


  return (
    <div className='main_body'>
      <div className='chat'>
        <div className='header'><h3>Sync Live Chat</h3></div>
        <div className='messages'>
        {messageList.map( (message, index) => {
            return (
              <div key={index} className={userName === message.user ? "you" : "other"}>
                {console.log(index)}
                <span >{message.message}</span>
                <div className='info'>
                  <small >{message.time}</small>
                  <small><strong>{message.user}</strong></small>
                </div>
              </div>
            
              )
          })
          }
         
       
        </div>
        
        <div className='message-section'>
          
          <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" id='chatInput' />
          
          <button onClick={send}>SEND</button>
        
        </div>
      </div>

    </div>
  )
}

export default ChatPage