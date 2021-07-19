import React, {useEffect, useState}  from 'react';
import {Link} from "react-router-dom";

import union from '../../doc/img/icon/union.png';
import category1 from '../../doc/img/categories/category1.jpg';
import category2 from '../../doc/img/categories/category2.jpg';
import category3 from '../../doc/img/categories/category3.jpg';
import category4 from '../../doc/img/categories/category4.jpg';

const categories = [
    {
        small_img: union,
        big_image: category1,
        title: 'Restaurant',
    },
    {
        small_img: union,
        big_image: category2,
        title: 'Entertainment',
    },
    {
        small_img: union,
        big_image: category3,
        title: 'Feature',
    },
    {
        small_img: union,
        big_image: category4,
        title: 'Business',
    }
];

const fetchData = async (url) => {
  const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
  const json = await res.json()
  return json
}

const CategoriesWidget = () => {

    const [categories, setBusinessNews] = useState([])

    useEffect(() => {
      fetchData("http://localhost:4000/api/v1/categories").then(news => {
        setBusinessNews(news)
      })
    }, [])

    return (
        <div className="widget category mb30">
            <div className="row">
                <div className="col-12 align-self-center">
                    <h2 className="widget-title">Categories</h2>
                </div>
                
            </div>
            <ul>
                {categories.map((item, i) => (
                    <li key={i}>
                        <Link to="/" style={{background: `url(${category1})`}}> <span>{item.name}</span>
                            <img src={union} alt="category"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesWidget;