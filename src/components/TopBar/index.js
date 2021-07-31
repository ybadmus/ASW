import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';
import FontAwesome from "../uiStyle/FontAwesome";

const fetchData = async (url) => {
  const res = await fetch(url, { mode: "cors" })
  const json = await res.json()
  console.log(json)
};

const TopBar = ({className, dark}) => {
    const [swiper, setSwiper] = useState(null);

    const [timeInGhana, setTimeInGhana] = useState([]);

    useEffect(() => {

      if (timeInGhana.length == 0) {
        fetchData("https://worldtimeapi.org/api/timezone/Africa/Accra").then(time => {
          setTimeInGhana(time);
        });
      }

    }, [setTimeInGhana]);

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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    };
    return (
        <div className={`topbar ${className ? className : ''}`} id="top">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 align-self-center">
                        <div className={`trancarousel_area ${dark ? 'white' : ''}`}>
                            <p className="trand">Trending</p>
                            <div className="nav_style1">
                                <Swiper getSwiper={setSwiper} className="trancarousel" {...params}>
                                    <div className="trancarousel_item">
                                        <p><Link to="/">Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                                            Now</Link>
                                        </p>
                                    </div>
                                    <div className="trancarousel_item">
                                        <p><Link to="/">Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                                            Now</Link>
                                        </p>
                                    </div>
                                    <div className="trancarousel_item">
                                        <p><Link to="/">Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                                            Now</Link>
                                        </p>
                                    </div>
                                </Swiper>
                                <div className="navBtns">
                                    <button className="navBtn prevBtn" onClick={goPrev}><FontAwesome name="angle-left"/>
                                    </button>
                                    <button className="navBtn nextBtn" onClick={goNext}><FontAwesome
                                        name="angle-right"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <div className="top_date_social text-right">
                            <div className={`paper_date ${dark ? 'white' : ''}`}>
                                <p>{timeInGhana}</p>
                            </div>
                            <div className={`social1 ${dark ? 'white' : ''}`}>
                                <ul className="inline">
                                    <li><Link to="#"><FontAwesome name="twitter"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="facebook-f"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="youtube-play"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="instagram"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;