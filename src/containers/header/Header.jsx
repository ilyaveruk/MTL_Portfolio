import React from 'react';
import { useState } from "react";
import Axios from "axios";
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/blazer.png';
import swal from 'sweetalert2';

const Header = () => {

    const [email, setEmail] = useState("");

    const addEmail = () => {
        Axios.post("http://localhost:3001/create", {
            email: email,
        }).then(() => {
            swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Email has been submitted ' + String.fromCodePoint(0x1F601) ,
                showConfirmButton: true,
                timer: 5000,
                text:"We will contact you soon"
            })
        });
    };


    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let&apos;s Build Something BIG with MTL-3D</h1>
                <p>MTL 3D Ltd. is a hi-tech company specialized in laser and optical scanning, measurement and quality
                    control inspection of turbine and compressor blades.
                </p>

                <div className="gpt3__header-content__input">
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Your Email Address"/>
                    <button onClick={addEmail} type="button" >Get Started</button>
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