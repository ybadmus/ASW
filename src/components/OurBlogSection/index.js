import React from 'react';
import {Link} from "react-router-dom";

const setDate = (date) => {
  const opt = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
  return new Date(date).toLocaleDateString("en-US", opt)
};

const OurBlogSection = ({dark, relatedStories, category}) => {
    return (
        <div className={`${dark ? 'primay_bg' : 'fourth_bg'} padding6030`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading">
                            <h2 className="widget-title">Related Stories</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {relatedStories.map((item, i) => (
                        <div key={i} className="col-md-6 col-lg-4">
                            <div className="single_post post_type3 mb30">
                                <div className="post_img">
                                    <Link to="/">
                                        <img src={item.story_image} alt="thumb"/>
                                    </Link>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta3">
                                        <Link to="#">{category}</Link>
                                        <Link to="#">{setDate(item.created_at)}</Link>
                                    </div>
                                    <h4><Link to={`/post/${item.id}`}>{item.title}</Link></h4>
                                    <div className="space-10"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBlogSection;