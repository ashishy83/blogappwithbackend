import React from "react";
// import { useContext } from "react";
// import { store } from "./Details";
import "./css/Technology.css";
import ResusableArticle from "./ResuseableComponents/ReusableArticle";
import AdBox from "./AdBox";
import { useState, useEffect } from "react";
import axios from "axios";

const Technology = () => {
  // const [detail] = useContext(store);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://blog-app-back-gc9wougfu-ashishy83.vercel.app/technology")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error fetching data", err));
  }, []);

  return (
    <>
      <h1 className="story-title">Technology</h1>
      <hr className="story-hr" />
      <div className="tech-article">
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

export default Technology;
