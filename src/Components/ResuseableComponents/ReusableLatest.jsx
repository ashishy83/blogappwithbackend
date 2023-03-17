import React from "react";
import { NavLink } from "react-router-dom";
import "../css/ReuseableLatest.css";

const ReusableLatest = (props) => {
  const { imgUrl, title, description, articleid,author } = props;
  return (
    <NavLink className='navlinks'
      state={{
        title: title,
        img: imgUrl,
        description: description,
        id: articleid,
        author:author,
      }}
      to={`article/${articleid}`}
    >
      <div className={articleid}>
        <div className="latest-story">
          <img src={imgUrl} alt="" className="latest-img" />
          <h2 className="latest-heading">{title} </h2>
          <p className="latest-para">{description}.... </p>
          <p className="date">{author} </p>
        </div>
      </div>
    </NavLink>
  );
};

export default ReusableLatest;
