import React, {Fragment, useEffect, useState}  from 'react';
import FollowUs from "../../components/FollowUs";
import MixCarousel from "../../components/MixCarousel";
import {Link} from "react-router-dom";
import BusinessNews from "../../components/BusinessNews";
import NewsLetter from "../../components/NewsLetter";
import CategoriesWidget from "../../components/CategoriesWidget";
import banner2 from '../../doc/img/bg/sidebar-1.png';

const fetchData = async (url) => {
  const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
  const json = await res.json()
  return json
}

const HomePage = () => {

  const [businessNews, setBusinessNews] = useState([]);
  const [mixArray, setMixArray] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {

    if (businessNews.length == 0) {
      fetchData("http://localhost:4000/api/v1/posts").then(news => {
        setBusinessNews(news);
      });
    }

  }, [businessNews]);

  useEffect(() => {

    if (mixArray.length == 0) {
      fetchData("http://localhost:4000/api/v1/posts/top_news").then(news => {
        setMixArray(news);
      });
    }

  }, [mixArray]);

  useEffect(() => {

    if (categories.length == 0) {
      fetchData("http://localhost:4000/api/v1/categories").then(news => {
        setCategories(news)
      });
    }
    
  }, [categories]);



  return (
      <Fragment>
 
          <MixCarousel className="half_bg1" mixArray={mixArray}/>

          <div className="space-70"/>

          <div className="entertrainments">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8">
                          <BusinessNews businessNews={businessNews}/>
                      </div>

                      <div className="col-lg-4">
                          <div className="row">

                              <div className="col-lg-12">
                                  <CategoriesWidget categories={categories}/>
                              </div>  

                              <div className="col-lg-12">
                                  <FollowUs title="Follow Us"/>
                              </div>

                              <div className="col-lg-12">
                                  <div className="banner2 mb30">
                                      <Link to="/">
                                          <img src={banner2} alt="thumb"/>
                                      </Link>
                                  </div>
                              </div>

                              <div className="col-lg-12">
                                  <NewsLetter/>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="space-70"/>

      </Fragment>
  );
};

export default HomePage;