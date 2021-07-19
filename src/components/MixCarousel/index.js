import React, {useState, useEffect} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';
import ModalVideo from 'react-modal-video';

const MixCarousel = ({className, dark, mixArray}) => {
    const [swiper, setSwiper] = useState(null);
    const [vModal, setvModal] = useState(false);
    const [videoId] = useState('0r6C3z3TEKw');
    

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
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 0
            },
        }
    };

    return (
        <div className={`mix_area ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={`mix_carousel ${dark ? 'primay_bg' : ''}`}>
                            <div className="single_mix_carousel nav_style3">
                                <Swiper getSwiper={setSwiper} {...params}>
                                    {mixArray.map((item, i) => (
                                        <div key={i} className="single_post post_type6 post_type9">
                                            <div className="post_img gradient1">
                                                <div className="img_wrap">
                                                    <Link className="play_btn" to="/">
                                                        <img src={item.image} className="carousel_img" alt="news"/>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single_post_text">
                                                <div className="meta"><Link to="/">{item.category}</Link>
                                                    <Link to="#">{item.date}</Link>
                                                </div>
                                                <h4><Link to="/video_post1">{item.title}</Link></h4>
                                            </div>
                                        </div>
                                    ))}
                                </Swiper>
                                <div className="owl-nav">
                                    <div onClick={goPrev} className="owl-prev"><FontAwesome name="angle-left"/></div>
                                    <div onClick={goNext} className="owl-next"><FontAwesome name="angle-right"/></div>
                                </div>
                            </div>
                        </div>
                        {/*CAROUSEL END*/}
                    </div>
                </div>
            </div>
            <div className="space-30"/>
            <ModalVideo channel='youtube' isOpen={vModal} videoId={videoId}
                        onClose={() => setvModal(false)}/>
        </div>
    );
};

export default MixCarousel;