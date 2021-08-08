import React, {Fragment, Component} from 'react';
import BannerSection from "../../components/BannerSection";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import SimpleReactValidator from 'simple-react-validator';
import {toast} from "react-toastify";
import scrollIcon from '../../doc/img/icon/scroll.png';
import black_phone from '../../doc/img/icon/black_phone.png';

const fetchData = async (url) => {
  const res = await fetch(url, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' }})
  const json = await res.json()
  return json
};

class ContactUsPage extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
    }

    state = {
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitHandler = async(e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const res = await fetch("http://localhost:4000/api/v1/enquiries", { method: 'POST', mode: 'cors', 
            headers: { 'Access-Control-Allow-Origin':'*', 'Content-Type':'application/json' }, body: JSON.stringify(this.state)});
            if(res.status == 200) {
              toast.success('Enquiry successfully sent');
              this.setState({
                name: '',
                subject: '',
                email: '',
                phone: '',
                message: '',
              });
              this.validator.hideMessages()
            }
            else
              toast.error('Error sending enquiry');
        } else {
            toast.error('Please fill the input');
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }
    };

    render() {
        const {name, subject, email, phone, message} = this.state;
        return (
            <Fragment>
                <div className="inner inner_bg inner_overlay">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="title_inner">
                                        <h6>CONTACT US</h6>
                                        <h1>let's Contact</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="inner_scroll">
                                <div className="scrollIcon">
                                    <img src={scrollIcon} alt="scrollIcon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contacts section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="box single_contact_box">
                                    <div className="contact_title">
                                        <h3>Head Office</h3>
                                    </div>
                                    <div className="contact_details">
                                        <p>LOCATION:</p>
                                        <h6>Gen. C. C Bruce Street, Dansoman, Accra</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box single_contact_box">
                                    <div className="contact_title">
                                        <h3>Head Office</h3>
                                    </div>
                                    <div className="contact_details">
                                        <p>LOCATION:</p>
                                        <h6>2 Old Bank Street, Bawjiase Market, Awutu Bawjiase</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box single_contact_box">
                                    <div className="contact_title">
                                        <h3>Training Center</h3>
                                    </div>
                                    <div className="contact_details">
                                        <p>LOCATION:</p>
                                        <h6>Mad. Fausty's Residence, Mfante New-Town, Awutu Bawjiase</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact_form padding-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="map">
                                    <iframe
                                        title="map"
                                        frameBorder={0}
                                        height="450px"
                                        width="100%"
                                        src="https://maps.google.com/maps?q=Dansoman,%20Accra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        allowFullScreen/>
                                </div>
                            </div>
                        </div>
                        <div className="space-50"/>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="cotact_form">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3>Let’s work together! <br/> Fill out the form.</h3>
                                        </div>
                                        <div className="col-12">
                                            <form onSubmit={this.submitHandler}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <input name="name" value={name} onChange={this.changeHandler}
                                                               type="text"
                                                               placeholder="Full Name"/>
                                                        {this.validator.message('Full Name', name, 'required')}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input name="subject" value={subject}
                                                               onChange={this.changeHandler} type="text"
                                                               placeholder="Subject"/>
                                                        {this.validator.message('Subject', subject, 'required')}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input name="email" value={email} onChange={this.changeHandler}
                                                               type="email"
                                                               placeholder="Email Adress"/>
                                                        {this.validator.message('Email', email, 'required|email')}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input name="phone" value={phone} onChange={this.changeHandler}
                                                               type="number"
                                                               placeholder="Phone Number"/>
                                                        {this.validator.message('Phone', phone, 'required')}
                                                    </div>
                                                    <div className="col-12">
                                                    <textarea name="message"
                                                              value={message}
                                                              onChange={this.changeHandler}
                                                              id="message"
                                                              cols="30" rows="5"
                                                              placeholder="Tell us about your message…"/>
                                                        {this.validator.message('Message', message, 'required')}
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="space-20"/>
                                                        <button className="cbtn1" type="submit">Send Messege</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <FollowUs title="Follow Us"/>
                                <NewsLetter/>
                            </div>
                        </div>
                    </div>
                </div>
                <BannerSection/>
            </Fragment>
        )
    }
}

export default ContactUsPage;