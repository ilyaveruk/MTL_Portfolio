import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/blazer.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let&apos;s Build Something BIG with MTL-3D</h1>
                <p>MTL 3D Ltd. is a hi-tech company specialized in laser and optical scanning, measurement and quality
                    control inspection of turbine and compressor blades.
                </p>

                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people"/>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className="gpt3__header-image">
                <img src={ai} alt="ai"/>
            </div>
        </div>
    );
};

export default Header;