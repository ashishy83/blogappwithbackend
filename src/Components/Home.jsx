import React from "react";
import { useContext } from "react";
import "./css/Home.css";
import AdBox from "./AdBox";
import { store } from "./Details";
import ResusableArticle from "./ResuseableComponents/ReusableArticle";
import CardHome from "./ResuseableComponents/CardHome";
import ReusableLatest from "./ResuseableComponents/ReusableLatest";
import { Link } from "react-router-dom";



const Home = () => {
  const [detail] = useContext(store);
 

  console.log(detail);
  return (
    <>
      <div className="grid-box">
        <div className="g1">
          {/* <img
            src="https://th.bing.com/th/id/R.efb9015189390e10e99e2d4617e951b5?rik=xpaey3TE%2fyZgVg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2fc%2fd%2f257781.jpg&ehk=6MP4LslHiQqtjHTaElLcVb%2f3p3fHS8o9V7OME5K%2fves%3d&risl=&pid=ImgRaw&r=0"
            alt="mountain"
            className="big-img"
          />
          <h2 className="heading-big">Title of the vertical gallery</h2>
          <p className="date-big">Travel / August 21 2017</p> */}
          <Link to="/Technology">
            {" "}
            <img
              src={
                "https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2017/07/top-new-innovation-technology.jpg"
              }
              alt="not found"
              className="big-img"
            />
          </Link>
        </div>
        <div className="g2-g3">
        <div className="g2">
          {/* {detail
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((item) => (
              <CardHome
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 100)}
                author={item.author}
              />
            ))} */}
          <Link to="/fitness">
            {" "}
            <img
              src={
                "https://images.indianexpress.com/2020/04/headstand-1200.jpg"
              }
              alt="not found" className="g2-img"
            />
          </Link>
        </div>
        <div className="g3">
          {/* {detail
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((item) => (
              <CardHome
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 100)}
                author={item.author}
              />
            ))} */}
          <Link to="/Food">
            {" "}
            <img
              src={
                "https://media.istockphoto.com/photos/biryani-picture-id1305452646?b=1&k=20&m=1305452646&s=170667a&w=0&h=1M4qIQor9-oTbDFc8osB9TKQEEMBn7j_4D1Qy7hRdNk="
              }
              alt="not found" className="g3-img"
            />
          </Link>
          </div>
        </div>
      </div>

      <h1 className="story-title">The Latest </h1>
      <hr className="story-hr" />

      <div className="top-container">
        <div>
          {detail
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((item) => (
              <ReusableLatest
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 100)}
                author={item.author}
              />
            ))}
        </div>
        <div>
          {detail
            .filter((article) => {
              return article.category === "technology";
            })
            .map((item) => (
              <ReusableLatest
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 100)}
                author={item.author}
              />
            ))}
        </div>

        <div>
          {detail
            .filter((article) => {
              return article.category === "food";
            })
            .map((item) => (
              <ReusableLatest
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title.slice(0, 50)}
                description={item.description.slice(0, 100)}
                author={item.author}
              />
            ))}
        </div>
      </div>

      <h1 className="story-title">Latest Articles</h1>
      <hr className="story-hr" />

      <div className="latest-article">
        <div className="left-article">
          {detail
            .filter((article) => {
              return article.category === "mix";
            })
            .map((item) => (
              <ResusableArticle
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title.slice(0, 50)}
                description={item.description.slice(0, 100)}
                author={item.author}
              />
            ))}
        </div>
        <div className="right-article">
          <AdBox />
        </div>
      </div>

      <h1 className="story-title">Latest Stories</h1>
      <hr className="story-hr" />
      <div className="footer-post">
        <div>
          {detail
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 100)}
                author={n.author}
              />
            ))}
        </div>
        <div>
          {detail
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 100)}
                author={n.author}
              />
            ))}
        </div>
        <div>
          {detail
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 101)}
                author={n.author}
              />
            ))}
        </div>
      </div>
      <hr />
      
    </>
  );
};

export default Home;
