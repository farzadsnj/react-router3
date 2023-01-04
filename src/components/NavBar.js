import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export function NavBar() {

    const navLinkStyles = ({isActive}) =>{
        return{
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }

  return (
    <nav className='primary-nav '>
        <NavLink style={navLinkStyles} to='/'>Home</NavLink>
        <NavLink style={navLinkStyles} to='about'>About</NavLink>
        <NavLink style={navLinkStyles} to='nested-products'>NestedProducts</NavLink>

        {/* <Link to='/'>Home</Link>
        <Link to='about'>About</Link> */}
    </nav>
  )
}