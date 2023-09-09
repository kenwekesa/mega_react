import React from 'react';
import Navbar from '../../compnents/navbar/Navbar';
import Footer from '../../compnents/footer/Footer';
import './main.scss'

function Main(props) {
    return (
        <div className='main'>
            <Navbar className='navbar'/>
            <Footer className='footer'/>
        </div>
    );
}

export default Main;