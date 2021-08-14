import React from 'react';
import {Link} from "react-router-dom";

const PostOnePagination = ({className, next, previous}) => {
    return (
        <div className="next_prev">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className={`${className ? className : 'next_prv_single border_left3'}`}>
                        <p>PREVIOUS NEWS</p>
                        <h3><Link to={`/post/${previous.id}`}>{previous.title}</Link></h3>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className={`${className ? className : 'next_prv_single border_left3'}`}>
                        <p>NEXT NEWS</p>
                        <h3><Link to={`/post/${next.id}`}>{next.title}</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostOnePagination;