import React from "react";
import AdBox from "./AdBox";
import "./css/Food.css";
import ResusableArticle from "./ResuseableComponents/ReusableArticle";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Food = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog-app-back-gc9wougfu-ashishy83.vercel.app/food")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log("Error Fetching Data", err);
      });
  }, []);
  return (
    <>
      <h1 className="story-title">Food</h1>
      <hr className="story-hr" />
      <div className="food-article">
        <div className="left">
          {data.map((item) => {
            return (
              <ResusableArticle
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                description={item.description.slice(0, 300)}
                title={item.title}
              />
            );
          })}
        </div>
        <div className="right">
          <AdBox />
          <br />
          <AdBox />
        </div>
      </div>
    </>
  );
};

export default Food;
