import React from 'react'
import Greeting from './Greeting'
import { useState } from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ? 
                <LogoutButton onClick={handleLogout} /> : 
                <LoginButton onClick={handleLogin} />}
        </div>
    )
}

export default LoginControl
