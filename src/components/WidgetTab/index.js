import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const WidgetTab = ({className, dark, title, data}) => {

    return (
      
        <div className={`widget_tab md-mt-30 ${className}`}>
            <div className="row">
                <div className="col-12 align-self-center">
                    <h2 className="widget-title">{title}</h2>
                </div>
            </div>
            <div className="widget tab_widgets">
                {data.map((item, i) => (
                    <Fragment key={i}>
                       
                        <div className="single_post widgets_small">
                            <div className="post_img">
                                <div className="img_wrap">
                                    <Link to="/">
                                        <img src={item.image} alt="thumb"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="single_post_text">
                                <div className="meta2 meta_separator1"><Link to="#">{item.category}</Link>
                                    <Link to="#">{item.date}</Link>
                                </div>
                                <h4><Link to="/post1">{item.title}</Link></h4>
                            </div>
                        </div>
                        <div className="space-15"/>
                        {dark ? <div className="border_white"/> : <div className="border_black"/>}
                        <div className="space-15"/>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default WidgetTab;