import React from "react";
import { useState } from "react";
// import { useContext } from "react";
import AdBox from "./AdBox";
import "./css/Bollywood.css";
// import { store } from "./Details";
import ResusableArticle from "./ResuseableComponents/ReusableArticle";
import axios from "axios";
import { useEffect } from "react";

const Bollywood = () => {
// const [context]= useContext(store);

const [data, setData] = useState([]);

useEffect(()=>{
  axios.get('https://blog-app-back-gc9wougfu-ashishy83.vercel.app/bollywood').then(res =>{
    setData(res.data);
  }).catch(err =>{console.log('Error fetching data',err)});
},[]);


  return (
    <>
      <div>
        <h1 className="story-title">Bollywood</h1>
        <hr className="story-hr" />
        <div className="bolly-post">
          <div className="left">
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
            <AdBox/>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Bollywood;
