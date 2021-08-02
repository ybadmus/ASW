import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import EntertainmentNews from "../../components/EntertainmentNews";
import banner2 from "../../doc/img/bg/sidebar-1.png";
import BannerSection from "../../components/BannerSection";

const fetchData = async (url) => {
  const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
  const json = await res.json()
  return json
}

const EntertainmentPage = () => {

    let [category, setCategory] = useState("");
    let [entertainments, setEntertainments] = useState([]);
    let { id } = useParams();

    useEffect(() => {

      if (entertainments.length == 0) {
        fetchData(`http://localhost:4000/api/v1/categories/${id}/posts`).then(news => {
          if(news.length > 0)
            setCategory(news[0].category)
          setEntertainments(news);
        });
        window.scrollTo(0, 0);
      }
  
    }, [entertainments]);

    return (
        <Fragment>
            <BreadCrumb title={category}/>
            <div className="archives padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-12 align-self-center">
                                    <div className="categories_title">
                                        <h5>{category}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="entertrainment_carousel">
                                <div className="entertrainment_item">
                                    <div className="row">
                                        <EntertainmentNews headerHide={true} entertainments={entertainments}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="cpagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" to="/" aria-label="Previous">
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-left"/></span>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/">1</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/">..</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/">5</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/" aria-label="Next">
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-right"/></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
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
            <div className="space-70"/>
            <BannerSection/>
        </Fragment>
    );
};

export default EntertainmentPage;