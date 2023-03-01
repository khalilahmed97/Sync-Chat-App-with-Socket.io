import React from 'react'
import { useState, createContext, useContext } from 'react'
import { io } from 'socket.io-client';
const ChatContext = createContext();
const ContextProvider = ({children}) => {
    const [userName, setUserName] = useState("")
    const [roomNo, setRoomNo] = useState("")
    const socket = io("http://localhost:3000");
  return (
    <ChatContext.Provider value={{userName, setUserName, roomNo, setRoomNo, socket}}>{children}</ChatContext.Provider>
  )
}

export const ChatState = () => {
    return useContext(ChatContext)
}
export default ContextProvider