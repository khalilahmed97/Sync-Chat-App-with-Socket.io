import React, {useState} from 'react'
import './JoinPage.css'
import {Link} from 'react-router-dom'
import { io } from "socket.io-client";
import { ChatState } from '../context/ContextProvider';
const JoinPage = () => {
  const { userName, setUserName, roomNo, setRoomNo } = ChatState();
  const socket = io("http://localhost:3000");
  const sendUser = () => {
    if(!userName || !roomNo){
      alert("ENTER DETAILS!")
    }
    else{
      socket.emit("joined", roomNo)
    }
   

    
  
  }
  return (
    <div className='body'>
       <img src="logoImage.png" height={150} alt="" />
      <div className="container">
       
        <h1>SYNC CHAT APP</h1>
        <span></span>
        <input type="text" placeholder="ENTER YOUR NAME" id='input' onChange={(event) => setUserName(event.target.value)} required/>
        <input type="text" placeholder="ENTER YOUR ROOM NO." id='input' onChange={(event) => setRoomNo(event.target.value)} required/>
       {/* <Button name={"LOGIN"} action={sendUser} location={"/chat"}/> */}
       <Link style={{width:"100%", height:"20%", backgroundColor:"#901328", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", color:"white"}} onClick={sendUser} to={"/chat"}><h1>LOGIN</h1></Link>
      </div>
    </div>
  )
}
export default JoinPage
