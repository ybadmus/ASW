import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';
import {mostViewSort} from "../../utils/commonFunctions";

const fetchData = async (url) => {
  const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
  const json = await res.json()
  return json
}

const MostShareWidget = ({title, dark}) => {
    const [swiper, setSwiper] = useState(null);
    const [businessNews, setBusinessNews] = useState([]);
  
    useEffect(() => {
  
      if (businessNews.length === 0) {
        fetchData("https://cryptic-ridge-64289.herokuapp.com/api/v1/posts").then(news => {
          setBusinessNews(news);
        });
      }
  
    }, [businessNews]);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

    const params = {
        slidesPerView: 1,
        slidesPerColumn: 6,
    };
    
    return (
        <div className="widget tab_widgets mb30">
            <h2 className="widget-title">{title ? title : 'Most View'}</h2>
            <div className="post_type2_carousel multipleRowCarousel nav_style1">
                <Swiper getSwiper={setSwiper} {...params}>
                    {mostViewSort(businessNews).map((item, i) => (
                        <div key={i} className="carousel_items">
                            <div className="single_post widgets_small widgets_type4">
                                <div className="post_img number">
                                    <h2>{item.id}</h2>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2"><Link to="#">TECHNOLOGY</Link>
                                        <Link to="#">March 26, 2020</Link>
                                    </div>
                                    <h4><Link to="/post1">Nancy zhang a chinese busy woman and dhaka</Link></h4>
                                    <ul className="inline socail_share">
                                        <li><Link to="#"><FontAwesome name="twitter"/>2.2K</Link></li>
                                        <li><Link to="#"><FontAwesome name="facebook-f"/>2.2K</Link></li>
                                    </ul>
                                    <div className="space-15"/>
                                    {dark ? <div className="border_white"/> : <div className="border_black"/>}
                                </div>
                            </div>
                            <div className="space-15"/>
                        </div>
                    ))}
                </Swiper>
                <div className="navBtns">
                    <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                    <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                </div>
            </div>
        </div>
    );
};

export default MostShareWidget;