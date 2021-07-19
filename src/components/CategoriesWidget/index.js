import React, {useEffect, useState}  from 'react';
import {Link} from "react-router-dom";

import union from '../../doc/img/icon/union.png';
import category1 from '../../doc/img/categories/category1.jpg';

const CategoriesWidget = ({categories}) => {

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