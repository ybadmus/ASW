import React, {Fragment, useEffect, useState} from 'react';
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import BannerSection from "../../components/BannerSection";
import PostOnePagination from "../../components/PostOnePagination";

import banner2 from "../../doc/img/bg/sidebar-1.png";
import author2 from '../../doc/img/author/author2.png';

import OurBlogSection from "../../components/OurBlogSection";


const fetchData = async (url) => {
  const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
  const json = await res.json()
  return json
};

const setDate = (date) => {
  const opt = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
  return new Date(date).toLocaleDateString("en-US", opt)
};

const PostOnePage = () => {

    const [post, setPost] = useState([]);
    const [nextPost, setNextPost] = useState([]);
    const [previousPost, setPreviousPost] = useState([]);
    const [relatedStories, setRelatedStories] = useState([]);
    const [category, setCategory] = useState([]);
    
    useEffect(() => {

      if (post.length == 0) {
        fetchData("http://localhost:4000/api/v1/posts/11").then(news => {
          setCategory(news.category_name)
          setRelatedStories(news.related_stories);
          setPost(news);
          setNextPost(news.next);
          setPreviousPost(news.previous);
        });
      }

    }, [post]);

    return (
        <Fragment>
            <div className="archives post post1">
                <div className="space-20"/>
                <div className="container">
                    <div className="space-20"/>
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="single_post_heading">
                                <h1>{post.title}</h1>
                                <div className="space-10"/>
                            </div>
                            <div className="space-30"/>
                            <img src={post.detail_media} alt="thumb"/>
                            <div className="space-30"/>
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="author">
                                        <div className="author_img">
                                            <div className="author_img_wrap">
                                                <img src={author2} alt="author2"/>
                                            </div>
                                        </div>
                                        <Link to="#">{post.posted_by}</Link>
                                        <ul>
                                            <li><Link to="#">{setDate(post.created_at)}</Link></li>
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

                            <p dangerouslySetInnerHTML={{__html: post.description}}></p>

                            <div className="space-40"/>
                            <div className="border_black"/>
                            <div className="space-40"/>
                            <PostOnePagination next={nextPost} previous={previousPost}/>
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
            <OurBlogSection category={category} relatedStories={relatedStories}/>
            <BannerSection/>
        </Fragment>
    )
};

export default PostOnePage;