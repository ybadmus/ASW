import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FooterCopyright from "../FooterCopyright";
import FontAwesome from "../uiStyle/FontAwesome";
import {toast} from "react-toastify";
import flogo from '../../doc/img/logo/footer_logo.png';

const FooterArea = ({className}) => {
    const [email, setEmail] = useState(''); 
      
    const handleChange = (e) => {
      setEmail(e.target.value);
    };

    const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const handleSave = async () => {

      let data = {ip_address: '127.0.0.1', email_address: email }
      const res = await fetch("http://localhost:4000/api/v1/newsletters", { method: 'POST', mode: 'cors', 
        headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type':'application/json' }, body: JSON.stringify(data)});
      try {
        const json = await res.json(); 
        return json
      } catch (error) {
        if(res.ok)
          return ["Email successfully added to subscribers list."]
        else
          return [res.statusText] 
      }
    };

    const onSignupClick = async (e) => {
      e.preventDefault();
      if(!validateEmail(email))
        return toast.error("Invalid email address");
      handleSave()
        .then(function(json) {
          toast.info(json[0])
        })
      setEmail("");
    };

    return (
        <div className={`footer footer_area1 ${className ? className : ''}`}>
            <div className="container">
                <div className="cta">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <div className="footer_logo logo">
                                <Link to="/">
                                    <img src={flogo} className="rounded" alt="logo"/>
                                </Link>
                            </div>
                            <div className="social2">
                                <ul className="inline">
                                    <li><Link to="#"><FontAwesome name="twitter"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="facebook-f"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="youtube-play"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="instagram"/></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 offset-lg-2 align-self-center">
                            <div className="signup_form">
                                <form>
                                    <input onChange={handleChange} value={email} className="signup"
                                           type="email" placeholder="Your email address"/>
                                    <button type="submit" className="cbtn" onClick={onSignupClick}>sign up</button>
                                </form>
                                <p>We hate spam as much as you do</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border_white"/>
                <div className="space-40"/>
            </div>
            <FooterCopyright/>
        </div>
    );
};

export default FooterArea;