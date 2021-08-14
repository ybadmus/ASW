import React from 'react';
import {Link} from "react-router-dom";
import tp_banner from '../../doc/img/bg/banner1.png';

const LogoArea = ({className, dark}) => {
    return (
        <div className={`logo_area ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 align-self-center">
                        <div className="banner1 text-center">
                            <Link to="#">
                                <img src={tp_banner} alt="banner"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoArea;