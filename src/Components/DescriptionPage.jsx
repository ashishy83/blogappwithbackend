import React from 'react'
import { useLocation } from 'react-router-dom'
import './css/Description.css'

const DescriptionPage = () => {
    const location = useLocation();
    const {title, img, description} = location.state;
  return (
    <>
        <div className="description-page">
            <h1 className='desc-title'>{title}</h1>
            <img src={img} alt="" className='desc-img'/>
            <p className='desc'>{description} </p>
        </div>
    </>
  )
}

export default DescriptionPage