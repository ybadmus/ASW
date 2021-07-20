import React, {useState}  from 'react';


const NewsLetter = ({className, input_white, titleClass}) => {

    const [email, setEmail] = useState(''); 
    
    const handleChange = (e) => {
      setEmail(e.target.value);
    }
  
    const signup = async (e) => {
      e.preventDefault();
      let data = {ip_address: '127.0.0.1', email_address: email }
      await fetch("http://localhost:4000/api/v1/newsletters", { method: 'POST', mode: 'cors', 
        headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type':'application/json' }, body: JSON.stringify(data)})
    }
  
    return (
        <div className={`box widget news_letter mb30 ${className ? className : ''}`}>
            <h2 className={`widget-title ${titleClass}`}>Newsletter</h2>
            <p>Sign up to our newsletter and receive the best stories directly in your mail.</p>
            <div className="space-20"/>
            <div className="signup_form">
                <form>
                    <input className={`signup ${input_white ? 'white_bg' : ''}`} type="email"
                        value={email} onChange={handleChange} placeholder="Your email address"/>
                    <button type="button" className="cbtn" onClick={signup}>sign up</button>
                </form>
                <div className="space-10"/>
                <p>We hate spam as much as you do</p>
            </div>
        </div>
    );
};

export default NewsLetter;