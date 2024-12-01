import { useState } from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { userContext } from './context/userContext'
import { BrowserRouter } from 'react-router-dom'


function App() {
  
  const [loggedUser, setLoggedUser] = useState({
    username: "",
    password: ""
  });//estado a usar por el context
  
  const updateLoggedUser = (newLoggedUser) => { //funcion de context
    const {username, password} = newLoggedUser
    setLoggedUser({username: username})
  };
  //export del context
  const loggedUserData = {
    loggedUser,
    updateLoggedUser
  }


  return <>
    
      <BrowserRouter>
      <userContext.Provider value={loggedUserData}>
        <Header />
        <Main />
        </userContext.Provider>
      </BrowserRouter>
      
    </>
  
}

export default App

