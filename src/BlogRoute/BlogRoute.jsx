import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Bollywood from '../Components/Bollywood'
import DescriptionPage from '../Components/DescriptionPage'
import Detailspage from '../Components/Detailspage'
import Fitness from '../Components/Fitness'
import Food from '../Components/Food'
import Hollywood from '../Components/Hollywood'
import Home from '../Components/Home'
import Technology from '../Components/Technology'

const BlogRoute = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path='/Bollywood' element={<Bollywood/>} />
            <Route path='/Hollywood' element={<Hollywood/>}/>
            <Route path='/Fitness' element={<Fitness/>}/>
            <Route path='/Food' element={<Food/>} />
            <Route path='/Tech' element={<Technology/>} />
            <Route path=':category/articleid' element={<DescriptionPage/>} />   
            <Route path='*' element={<Detailspage/>} />         
        </Routes>
    </div>
  )
}

export default BlogRoute