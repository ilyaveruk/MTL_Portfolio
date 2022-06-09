import React from 'react';
import './footer.css';
import logo from '../../assets/mtl.png';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p> <a href="#home">Contact Us</a></p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={logo} alt="gpt3_logo" />
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Migdal Tefen, 2495900, Dolev 3</p>
                    <p>Office: +972-4-6001464</p>
                    <p>Fax: +972-4-6171745</p>
                    <p>Info@MTL-3D.com</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>@2022 MTL-3D. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;