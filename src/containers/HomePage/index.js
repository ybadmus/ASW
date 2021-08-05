import React, {Fragment, useEffect, useState}  from 'react';
import FollowUs from "../../components/FollowUs";
import MixCarousel from "../../components/MixCarousel";
import {Link} from "react-router-dom";
import BusinessNews from "../../components/BusinessNews";
import NewsLetter from "../../components/NewsLetter";
import CategoriesWidget from "../../components/CategoriesWidget";
import banner2 from '../../doc/img/bg/sidebar-1.png';
import ClipLoader from "react-spinners/DotLoader";

const fetchData = async (url) => {
  const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
  const json = await res.json()
  return json
};

const HomePage = () => {

  const [businessNews, setBusinessNews] = useState([]);
  const [mixArray, setMixArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (businessNews.length == 0) {
      fetchData("http://localhost:4000/api/v1/posts").then(news => {
        setBusinessNews(news);
        setLoading(false);
      });
    }

  }, [businessNews]);

  useEffect(() => {

    if (mixArray.length == 0) {
      fetchData("http://localhost:4000/api/v1/posts/top_news").then(news => {
        setMixArray(news);
        setLoading(false);
      });
    }

  }, [mixArray]);

  if (loading) 
    return ( <ClipLoader color={"black"} loading={loading} css={"display: block;margin: 10% auto;"} size={100} /> )

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
                                  <CategoriesWidget />
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