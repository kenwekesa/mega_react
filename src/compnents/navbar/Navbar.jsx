import React from 'react';
import './navbar.scss'

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <div className="navTop">
                    <div className="contacts">+254 348 447 78</div>
                    <div className="social">Facebook</div>
                </div>
                <div className="navBottom">
                    <div className="logo">Lpogo</div>
                    <div className="navLinks">
                        <span>Home</span>
                        <span>About</span>
                        <span>Services</span>
                        <span>Blog</span>
                    </div>
                    <div className="navButtons">
                        <div className="btn">Puchase</div>
                        

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;