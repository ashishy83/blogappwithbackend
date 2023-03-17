import React from "react";
import { NavLink } from "react-router-dom";
import "../css/CardHome.css";

const CardHome = (props) => {
  const { imgUrl, title, description, articleid } = props;

  return (
    <>
      <NavLink className='navlinks'
        state={{
          title: title,
          img: imgUrl,
          description: description,
          id: articleid,
        }}
        to={`article/${articleid}`}
      >
        <div className={articleid}>
          <div className="reuse-comp">
            <img src={imgUrl} alt="not found" className="image" />
            <h2 className="heading">{title}</h2>
            <p className="para">{description}....</p>
          </div>
        </div>
        {/* <hr  style={{fontWeight:'30px', color:'grey'}}/> */}
      </NavLink>
    </>
  );
};

export default CardHome;
