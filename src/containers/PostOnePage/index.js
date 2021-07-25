import React, {Fragment} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import BannerSection from "../../components/BannerSection";
import PostOnePagination from "../../components/PostOnePagination";

// images
import banner2 from "../../doc/img/bg/sidebar-1.png";
import big2 from '../../doc/img/blog/big2.jpg';
import author2 from '../../doc/img/author/author2.png';
import quote from '../../doc/img/icon/q.png';
import quote_1 from '../../doc/img/blog/quote_1.jpg';
import big1 from '../../doc/img/blog/big1.jpg';
import smail1 from '../../doc/img/blog/smail1.jpg';
import single_post1 from '../../doc/img/blog/single_post1.jpg';

import OurBlogSection from "../../components/OurBlogSection";
import BlogComment from "../../components/BlogComment";

const PostOnePage = () => {
    return (
        <Fragment>
            <div className="archives post post1">
                <div className="space-20"/>
                <div className="container">
                    <div className="space-20"/>
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="single_post_heading">
                                <h1>Japan’s virus success has puzzled the world. Is its luck running out?</h1>
                                <div className="space-10"/>
                            </div>
                            <div className="space-30"/>
                            <img src={single_post1} alt="thumb"/>
                            <div className="space-30"/>
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="author">
                                        <div className="author_img">
                                            <div className="author_img_wrap">
                                                <img src={author2} alt="author2"/>
                                            </div>
                                        </div>
                                        <Link to="#">Shuvas Chandra</Link>
                                        <ul>
                                            <li><Link to="#">March 26, 2020</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <div className="author_social inline text-right">
                                        <ul>
                                            <li><Link to="#"><FontAwesome name="instagram"/></Link></li>
                                            <li><Link to="#"><FontAwesome name="facebook-f"/></Link></li>
                                            <li><Link to="#"><FontAwesome name="youtube"/></Link></li>
                                            <li><Link to="#"><FontAwesome name="instagram"/></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="space-30"/>
                            <p>Entilators will be taken from certain New York hospitals and redistributed to the
                                worst-hit parts of the state under an order to be signed by Governor Andrew Cuomo.
                                <br/><br/>
                                New York saw its highest single-day increase in deaths, up by 562 to 2,935 -
                                nearly half of all virus-related US deaths recorded yesterday. The White
                                House may advise those in virus hotspots to wear face coverings in public to
                                help stem the spread. The US now has 245,658 Covid-19 cases.<br/><br/>
                                A shortage of several hundred ventilators in New York City, the epicentre of the outbreak
                                in the US, prompted Mr Cuomo to say that he will order the machines be taken from
                                various parts of the state and give them to harder-hit areas.<br/><br/>
                                Amid a deepening crisis, top health official <span className="bold"> Dr Anthony Fauci</span> has said
                                he believes all states should issue stay-at-home orders. “I don’t understand why that’s not happening,” Dr Fauci told CNN on Thursday. “If you look at what’s going on in this country, I just don’t understand why we’re not do ingthat.” “You’ve got to put your foot on the accelerator to bring that number down,” he added, referring to infection and death rates.
                              </p>
                            <div className="space-40"/>
                            <p>The comments from Dr Fauci, who heads the National Institute of Allergy and
                                Infectious Diseases, appeared to contradict those of President Trump, who has
                                consistently dismissed the notion of a nationwide lockdown.
                                <br/>“It’s awfully tough to say, ‘close it down.’ We have to have a little bit of
                                flexibility,” Mr Trump said on Wednesday.</p>
                            <div className="space-40"/>
                            
                            <p>In global terms the US has the most Covid-19 cases - more than 245,000. And
                                on Thursday the US authorities said more than 1,000 had died in the past 24
                                hours - the highest daily toll so far in the world. Hospitals and morgues in New York are struggling to cope with the
                                pandemic, and New York Governor Andrew Cuomo has warned that New
                                York risks running out of ventilators for patients in six days.</p>
                            <div className="space-40"/>
                            <div className="border_black"/>
                            <div className="space-40"/>
                            <PostOnePagination/>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <FollowUs title="Follow Us"/>
                            <div className="banner2 mb30">
                                <Link to="/">
                                    <img src={banner2} alt="thumb"/>
                                </Link>
                            </div>
                            <NewsLetter/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-60"/>
            <OurBlogSection/>
            <BannerSection/>
        </Fragment>
    )
};

export default PostOnePage;