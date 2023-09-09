import React from 'react';
import './navbar.scss'
import { Call, FacebookOutlined, Twitter, Pinterest, Search } from '@mui/icons-material';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <div className="navTop">
                    
                    
                    <div className="contacts"><Call /> +254 348 447 78</div>
                    <div className="social">
                        <FacebookOutlined/>
                        <Twitter/>
                        <Pinterest/>
                    </div>
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
                        <Search className='search_icon'/>
                        
                        

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;