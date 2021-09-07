import React, { useEffect } from "react";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../actions";
import "../css/news.css";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.newsReducer);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  const News = news.data.articles;
  console.log("ok :", News);

  return (
    <div>
      <Nav />
      <div className="news">
        {News &&
          News.map(elem => {
            return (
              <>
                <div className="news-inner">
                  <h2>{elem.title}</h2>
                  <img src={elem.urlToImage} alt={elem.title} />
                  <p>{elem.description}</p>
                  <p>Author : {elem.author} </p>
                  <a href={elem.url}>More...</a>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default News;
