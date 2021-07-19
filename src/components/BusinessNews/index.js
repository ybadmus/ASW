import React from 'react';
import {Link} from "react-router-dom";

const BusinessNews = ({businessNews, headerHide}) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="businerss_news">
                    {headerHide ? '' :
                        <div className="row">
                            <div className="col-12 align-self-center">
                                <h2 className="widget-title">Latest News</h2>
                            </div>
                        </div>}
                    <div className="row">
                        <div className="col-12">
                            {businessNews.map((item, i) => (
                                <div key={i} className="single_post post_type3 post_type12 mb30">
                                    <div className="post_img">
                                        <div className="img_wrap">
                                            <Link to="/">
                                                <img src={item.image} alt="thumb"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single_post_text">
                                        <div className="meta3"><Link to="/">{item.category}</Link>
                                            <Link to="#">{item.date}</Link>
                                        </div>
                                        <h4><Link to="/post1">{item.title}</Link></h4>
                                        <div className="space-10"/>
                                        <p className="post-p">{item.description} ...</p>
                                        <div className="space-20"/>
                                        <Link to="/" className="readmore">Read more</Link>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessNews;