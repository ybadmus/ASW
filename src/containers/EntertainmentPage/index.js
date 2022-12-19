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
import ClipLoader from "react-spinners/DotLoader";

const EntertainmentPage = () => {

    let [category, setCategory] = useState("");
    let [entertainments, setEntertainments] = useState([]);
    const [loadLinks, setLoadLinks] = useState([]);
    const [pagedCount, setNewsCount] = useState(1);
    const [loading, setLoading] = useState(true);
    let { id } = useParams();

    const fetchData = async (url) => {
      const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
      const json = await res.json();
      setLoadLinks(res.headers.get('Link'));
      setNewsCount(Math.ceil(res.headers.get('X-Total-Count')/10))
      return json
    };

    const removeAngelBracket = url => {
      return url.split(';')[0].slice(1, -1);
    };

    const loadPagedNews = async (param) => {
      const listOfLinks = loadLinks.split(", ");
      let url = "";

      switch(param) {
        case "first":
          setLoading(true);
          url = removeAngelBracket(listOfLinks[0].split("; ")[0]);
          fetchData(url).then(news => {
            setEntertainments(news);
            setLoading(false);
          });
          break;
        case "prev":
          setLoading(true);
          url = removeAngelBracket(listOfLinks[1].split("; ")[0]);
          fetchData(url).then(news => {
            setEntertainments(news);
            setLoading(false);
          });
          break;
        case "next":
          setLoading(true);
          url = removeAngelBracket(listOfLinks[2].split("; ")[0]);
          fetchData(url).then(news => {
            setEntertainments(news);
            setLoading(false);
          });
          break;
        case "last":
          setLoading(true);
          url = removeAngelBracket(listOfLinks[3].split("; ")[0]);
          fetchData(url).then(news => {
            setEntertainments(news);
            setLoading(false);
          });
          break;  
        default:
          setLoading(true);
          url = removeAngelBracket(listOfLinks[0].split("; ")[0]);
          fetchData(url).then(news => {
            setEntertainments(news);
            setLoading(false);
          });
          break;
      }
    };

    useEffect(() => {

      if (entertainments.length === 0) {
        fetchData(`https://admin.aswnews.com/api/v1/categories/${id}/posts`).then(news => {
          if(news.length > 0)
            setCategory(news[0].category)
          setEntertainments(news);
          setLoading(false);
        });
        window.scrollTo(0, 0);
      }
  
    }, [entertainments]);
    
    if (loading) 
      return ( <ClipLoader color={"black"} loading={loading} css={"display: block;margin: 10% auto;"} size={100} /> )

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
                            {pagedCount > 1 &&
                                <div className="col-12">
                                    <div className="cpagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" to="#" aria-label="Previous" onClick={() => loadPagedNews("prev")}>
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-left"/></span>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#" onClick={() => loadPagedNews("first")}>1</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">..</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#" onClick={() => loadPagedNews("last")}>{pagedCount}</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#" aria-label="Next" onClick={() => loadPagedNews("next")}>
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-right"/></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            }
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <FollowUs title="Follow Us"/>
                            <div className="banner2 mb30">
                                <Link to="/">
                                    <img className="border rounded" src={banner2} alt="thumb"/>
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