import React from 'react';
import { useState } from "react";
import Axios from "axios";
import './header.css';
import blazer from '../../assets/blazer.png';
import swal from 'sweetalert2';

const Header = () => {

    const [email, setEmail] = useState("");

    const addEmail = () => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)) {
            Axios.post("http://localhost:3001/create", {
                email: email,
            }).then(() => {
                swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Email has been submitted ' + String.fromCodePoint(0x1F601),
                    showConfirmButton: true,
                    timer: 5000,
                    text: "We will contact you soon"
                })
            });
        }
        else
            swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Wrong mail ' + String.fromCodePoint(0x1F61F),
                showConfirmButton: true,
                timer: 5000,
                text: "Oops we guess you typed wrong password..Try again"
            })
    };



    return (
        <div className="mtl__header section__padding" id="home">
            <div className="mtl__header-content">
                <h1 className="gradient__text">Let&apos;s Build Something BIG with MTL-3D</h1>
                <p>MTL 3D Ltd. is a hi-tech company specialized in laser and optical scanning, measurement and quality
                    control inspection of turbine and compressor blades.
                </p>

                <div className="mtl__header-content__input">
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Your Email Address"/>
                    <button onClick={addEmail} type="button" >Get Started</button>
                </div>

                <div className="mtl__header-content__people">
                    <p>* We will contact you by mail up to 3 business days.</p>
                </div>
            </div>

            <div className="mtl__header-image">
                <img src={blazer} alt="ai"/>
            </div>
        </div>
    );
};

export default Header;