import React, {useState}  from 'react';


const NewsLetter = ({className, input_white, titleClass}) => {

    const [email, setEmail] = useState(''); 
    
    const handleChange = (e) => {
      setEmail(e.target.value);
    }
  
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
    }

    const onSignupClick = async (e) => {
      e.preventDefault();
      setEmail("");
      handleSave()
        .then(function(json) {
          console.log(json)
        })
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
                    <button type="button" className="cbtn" id="cbtn" onClick={onSignupClick}>sign up</button>
                </form>
                <div className="space-10"/>
                <p>We hate spam as much as you do</p>
            </div>
        </div>
    );
};

export default NewsLetter;