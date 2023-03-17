import React from 'react'
import { Link } from 'react-router-dom'
import './css/NavBar.css'

const NavBar = () => {
  return (
    <div>
        <ul>
        <li ><Link to={'/'} className='navlink'> Home</Link></li>
        <li><Link to={'/Bollywood'} className='navlink'> Bollywood</Link> </li>
        <li><Link to={'/Hollywood'} className='navlink'>Hollywood</Link></li>
        <li><Link to={'/Tech'} className='navlink'>Technology</Link></li>
        <li><Link to={'/Fitness'} className='navlink'>Fitness</Link></li>
        <li><Link to={'/Food'} className='navlink'>Food</Link></li>
        </ul>
        <hr />
    </div>
  )
}

export default NavBar