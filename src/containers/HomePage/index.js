import React, {Fragment, useEffect, useState}  from 'react';
import {Helmet} from "react-helmet";
import FollowUs from "../../components/FollowUs";
import MixCarousel from "../../components/MixCarousel";
import {Link} from "react-router-dom";
import BusinessNews from "../../components/BusinessNews";
import NewsLetter from "../../components/NewsLetter";
import CategoriesWidget from "../../components/CategoriesWidget";
import banner2 from '../../doc/img/bg/sidebar-1.png';
import ClipLoader from "react-spinners/DotLoader";
import FontAwesome from "../../components/uiStyle/FontAwesome";

const HomePage = () => {

  const [businessNews, setBusinessNews] = useState([]);
  const [loadMoreLink, setLoadMoreLink] = useState([]);
  const [mixArray, setMixArray] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchPosts = async (url) => {
    const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
    setLoadMoreLink(removeAngelBracket(res.headers.get('X-Load-More')));
    const json = await res.json()
    return json;
  };

  const fetchData = async (url) => {
    const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
    const json = await res.json()
    return json
  };

  const removeAngelBracket = url => {
    return url.split(';')[0].slice(1, -1);
  };

  const loadMoreNews = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    fetchPosts(loadMoreLink).then(news => {
        setBusinessNews(news);
        setLoading(false);
    });
  };

  useEffect(() => {

    if (businessNews.length === 0) {
      fetchPosts("https://admin.aswnews.com/api/v1/posts").then(news => {
        setBusinessNews(news);
        setLoading(false);
      });
    }

  }, [businessNews]);

  useEffect(() => {

    if (mixArray.length === 0) {
      fetchData("https://admin.aswnews.com/api/v1/posts/top_news").then(news => {
        setMixArray(news);
        setLoading(false);
      });
    }

  }, [mixArray]);

  if (loading) 
    return ( <ClipLoader color={"black"} loading={loading} css={"display: block;margin: 10% auto;"} size={100} /> )

  return (

      <Fragment>
          <Helmet>
              <meta property="og:url"           content="https://www.aswnews.com" />
              <meta property="og:type"          content="website" />
              <meta property="og:title"         content="Awutu Senya Watch" />
              <meta property="og:description"   content="Mouthpiece of Awutu Senya Constituency." />
              <meta property="og:image"         content="https://drive.google.com/uc?export=view&id=1jwknC7KdGvCyyV__VqKpkKDsqhR3p4zg" />
          </Helmet>
          
          <MixCarousel className="half_bg1" mixArray={mixArray}/>

          <div className="space-70"/>

          <div className="entertrainments">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8">
                        <BusinessNews businessNews={businessNews} loadMoreLink={loadMoreLink}/> 
                        
                        <div className="space-20"/>

                        <div className="row">
                          <div className="col-12 col-md-8">
                            <button type="button" onClick={loadMoreNews} className="loadmore"><span aria-hidden="true"><FontAwesome name="refresh"/></span> Load more</button>
                          </div>
                        </div>

                        <div className="space-50"/>
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
                                  <div className="banner2 mb30" >
                                      <Link to="/">
                                          <img src={banner2} className="border rounded" alt="thumb"/>
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