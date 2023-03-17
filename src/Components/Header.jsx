import React from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
  return (
    <div>
    <Link to={'/'} className='header-link' >
        <div className='header'>
        <span className='s s1'>The</span>
        <span className='s s2'>Siren</span>
    </div>
    </Link>
    </div>
  )
}

export default Header