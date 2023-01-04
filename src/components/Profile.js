import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () =>{
        auth.logOut()
        navigate('/')
    }
  return (
    <div>
        welcome {auth.user}
        <button onClick={handleLogout}>logOut</button>
    </div>
  )
}

export default Profile