import React, {useEffect, useState}  from 'react';
import {Link} from "react-router-dom";

import union from '../../doc/img/icon/union.png';
import category1 from '../../doc/img/categories/category1.jpg';

const fetchData = async (url) => {
  const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
  const json = await res.json()
  return json
};

const CategoriesWidget = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

    if (categories.length === 0) {
        fetchData("https://cryptic-ridge-64289.herokuapp.com/api/v1/categories").then(news => {
          setCategories(news)
        });
      }
      
    }, [categories]);

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
                        <Link to={`/category/${item.id}`} style={{background: `url(${category1})`}}> <span>{item.name}</span>
                            <img src={union} alt="category"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesWidget;