import React from 'react'
import { Link } from 'react-router-dom'
import DescriptionPage from './DescriptionPage'
import './css/Description.css'

const Detailspage = () => {
    // const mystyle = {
    //     color: 'red',
    //     backgroundColor: 'yellow',
    //     borderRadius: '10px',
        
    // }
  return (
    <div className='details'>
        <DescriptionPage />
        <Link to={'/'} ><button className='btn-home'>Go Home</button></Link>

    </div>
  )
}

export default Detailspage