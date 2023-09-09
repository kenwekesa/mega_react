import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';
import './footer.scss'

function Footer(props) {
    return (
        <div className='footer'>
            <div className="accordotion">
                <div className="top">
                    <div className="btn">Subscribe to <b>our Email</b></div>
                </div>
                <div className="middle">
                    <div className="label">For latest News and Updates</div>
                    <div className="emailField">
                        <input type="text" className='emailInput' placeholder='Enter Your email address'/>
                        <div className="subscribeButton">
                            Subscribe
                        </div>
                    </div>
                </div>
                <div className="bottom"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis lacus vel velit veh</p></div>
            </div>
            <div className="footbar">

                    <div className="logo">Lorem</div>
                    <div className="footlinks">
                        <span>Home</span>
                        <span>About</span>
                        <span>Contacts</span>
                        <span>Blog</span>
                    </div>
                    <div className="social">
                        <Instagram/>
                        <LinkedIn/>
                        <Facebook/>
                        <Twitter/>
                        
                    </div>
            </div>
            <hr className="hr" />
            <div className="bottom">
                <span> &copy; Lorem Ipsum</span>
                <span>Terms and conditioins | Private Policy</span>
            </div>
        </div>
    );
}

export default Footer;