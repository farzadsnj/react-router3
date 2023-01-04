import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export function NavBar() {

    const navLinkStyles = ({isActive}) =>{
        return{
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }

    const auth = useAuth()

  return (
    <nav className='primary-nav '>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='about'>About</NavLink>
        <NavLink style={navLinkStyles} to='nested-products'>NestedProducts</NavLink>
        <NavLink style={navLinkStyles} to='profile'>profile</NavLink>
        {!auth.user && (
        <NavLink style={navLinkStyles} to='login'>login</NavLink>
        )}

        {/* <Link to='/'>Home</Link>
        <Link to='about'>About</Link> */}
    </nav>
  )
}