import React from 'react'
import Greeting from './Greeting'
import { useState } from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogout = () =>{
        setIsLoggedIn(false)

    }
    const handleLogin = () => {
        setIsLoggedIn(true)

    }
    let button; 

    if(isLoggedIn){
        button = <LogoutButton onClick={handleLogout}/>
    }
    else
    button=<LoginButton onClick = {handleLogin}/>
  return (
    <div><Greeting isLoggedIn={isLoggedIn}/>{button}</div>

  
  )
}

export default LoginControl