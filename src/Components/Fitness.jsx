import React from 'react'
// import { useContext } from 'react'
import AdBox from './AdBox'
// import { store } from './Details'
import ResusableArticle from './ResuseableComponents/ReusableArticle'
import './css/Fitness.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Fitness = () => {
  // const [context] = useContext(store)
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://blog-app-back-gc9wougfu-ashishy83.vercel.app/fitness').then(res=>setData(res.data)).catch(err=>console.log('Error fetching data',err)) 
    }, [])
  

  return (
    <>
     <h1 className="story-title">Fitness</h1>
      <hr className="story-hr" />
      <div className="fitness-article">
        <div className="left">
          {
            data.map((item)=>{
              return(
                <ResusableArticle
              key={item.id}
              articleid={item.id}
              imgUrl={item.img}
              description={item.description.slice(0,400)}
              title={item.title}
              />
              )
            })
          }
        </div>
        <div className="right">
          <AdBox/>
          <br />
          <AdBox/>
        </div>
      </div>

    </>
  )
}

export default Fitness