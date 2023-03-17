import React from 'react'
// import { store } from './Details'
import './css/Hollywood.css'
import ResusableArticle from './ResuseableComponents/ReusableArticle'
import AdBox from './AdBox'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Hollywood = () => {
  // const [context] = useContext(store)

  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('https://blog-app-back-gc9wougfu-ashishy83.vercel.app/hollywood').then(res=>{setData(res.data)}).catch(err=>{console.log('Error fetching the data',err)})
  })
  return (
    <>
        <h1 className="story-title">Hollywood</h1>
        <hr className="story-hr" />
        <div className="holly-post">
          <div className='left'>
            {
              data.map((item)=>{
                return(
                  <ResusableArticle
                  key={item.id}
                  articleid={item.id}
                  imgUrl={item.img}
                  description={item.description.slice(0, 300)}
                  title={item.title}
                  />
                  
                )
              })
              
            }
           
          </div>
          <div className="right">
              <AdBox/>
              <AdBox/>
          </div>
        </div>
    </>
  )
}

export default Hollywood