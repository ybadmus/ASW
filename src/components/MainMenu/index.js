import React, {Fragment, useState, useEffect} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import tempIcon from '../../doc/img/icon/temp.png';
import {Link, NavLink} from "react-router-dom";
import SearchModal from "../SearchModal";
import SidebarMenu from "../SidebarMenu";

const fetchData = async (url) => {
  const res = await fetch(url, { mode: "cors" })
  const json = await res.json()
  return json;
};

const menus = [
    {
        id: 1,
        linkText: 'Home',
        link: '/'
    },
    {
        id: 2,
        linkText: 'Contact',
        link: '/contact'
    },
    {
        id: 3,
        linkText: 'About',
        link: '/about'
    }
];

const MainMenu = () => {
    const [searchShow, setSearchShow] = useState(false);
    const [sideShow, setSideShow] = useState(false);
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState([]);

    useEffect(() => {

      if (weather.length == 0) {
        const cities = ["Winneba", "Bawjiase", "Swedru", "Kasoa", "Senya Beraku", "Accra"];
        fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${cities[Math.floor(Math.random()*cities.length)]}&appid=d5af63af4205838bfa1645e4e81226d1`).then(weather => {

          setCity(weather.name);
          setWeather(Math.round((weather.main.temp - 273.15) * 10) / 10);
        });
      }

    }, [weather]);

    const arr = menus;
    return (
        <Fragment>
            <div className="main-nav.dark-bg" id="header">  
                <Link to="#top" className="up_btn up_btn1">
                    <FontAwesome name="chevron-double-up"/>
                </Link>
                <div className="main-nav clearfix is-ts-sticky">
                    <div className="container">
                        <div className="row justify-content-between">
                            <nav className="navbar navbar-expand-lg col-lg-8 align-self-center">
                                <div className="site-nav-inner">
                                    <button className="navbar-toggler" onClick={() => setSideShow(true)}>
                                        <FontAwesome name="bars"/>
                                    </button>
                                    <div id="navbarSupportedContent"
                                         className="collapse navbar-collapse navbar-responsive-collapse">
                                        <ul className="nav navbar-nav" id="scroll">
                                            {arr.length > 0 ? arr.map((item, i) => (
                                                <li key={i}
                                                    className={`
                                                ${item.child ? 'dropdown' : ''}
                                                nav-item`}>
                                                    {item.child ? <NavLink onClick={e => e.preventDefault()} to="/"
                                                                           className="menu-dropdown"
                                                                           data-toggle="dropdown">{item.linkText}
                                                            <FontAwesome
                                                                name={item.icon}/></NavLink>
                                                        : <NavLink to={item.link} className="menu-dropdown"
                                                                   data-toggle="dropdown">{item.linkText} <FontAwesome
                                                            name={item.icon}/></NavLink>}

                                                    {item.child ?
                                                        <ul className="dropdown-menu" role="menu">
                                                            {item.submenu.map((sub_item, i) => (
                                                                <li key={i}
                                                                    className={`${sub_item.child ? 'dropdown-submenu' : null}
                                                        `}>
                                                                    {sub_item.child ?
                                                                        <NavLink onClick={e => e.preventDefault()}
                                                                                 to="/">{sub_item.linkText}</NavLink>
                                                                        : <NavLink
                                                                            to={sub_item.link}>{sub_item.linkText}</NavLink>}
                                                                    {sub_item.third_menu ?
                                                                        <ul className="dropdown-menu">
                                                                            {sub_item.third_menu.map((third_item, i) => (
                                                                                <li key={i}><NavLink
                                                                                    to={third_item.link}>{third_item.linkText}</NavLink>
                                                                                </li>
                                                                            ))}
                                                                        </ul> : null}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        : null
                                                    }
                                                </li>
                                            )) : null}
                                        </ul>
                                    </div>
                                    <SidebarMenu sideShow={sideShow} setSideShow={setSideShow} menus={arr}/>
                                </div>
                            </nav>
                            <div className="col-lg-4 align-self-center">
                                <div className="menu_right">
                                    <div className="lang d-none d-xl-block">
                                        <ul>
                                          <li><Link to="/">English</Link>
                                          </li>
                                        </ul>
                                    </div>
                                    <div className="temp d-none d-lg-block">
                                        <div className="temp_wap">
                                            <div className="temp_icon">
                                                <img src={tempIcon} alt="temp icon"/>
                                            </div>
                                            <h3 className="temp_count">{weather}</h3>
                                            <p>{city}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {searchShow ?
                <SearchModal setSearchShow={setSearchShow} searchShow={searchShow}/>
                : null
            }
        </Fragment>
    );
};

export default MainMenu;