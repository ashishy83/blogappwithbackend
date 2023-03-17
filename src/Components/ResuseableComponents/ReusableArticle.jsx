import React from "react";
import { NavLink } from "react-router-dom";
import "../css/ReusableArticle.css";

const ResusableArticle = (props) => {
  const { imgUrl, title, description, articleid } = props;

  return (
    <NavLink className='navlink-article'
      state={{
        title: title,
        img: imgUrl,
        description: description,
        id: articleid,
      }}
      to={`article/${articleid}`}
    >
      <div className="latest-article-comp">
        <div className="article-left">
          <img src={imgUrl} alt="not found" className="article-img" />
        </div>
        <div className="article-right">
          <h2 className="article-heading">{title} </h2>
          <p className="article-para">{description}.... </p>
        </div>
      </div>
    </NavLink>
  );
};

export default ResusableArticle;
