import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ChatPage from './components/ChatPage/ChatPage.jsx'
import JoinPage from './components/JoinPage/JoinPage.jsx'
import ContextProvider from './components/context/ContextProvider.jsx'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <ContextProvider>
      <Routes>
        <Route path='/' element={<JoinPage/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
      </Routes>
      </ContextProvider>
     
   
      </BrowserRouter>
    </div>
  )
}

export default App