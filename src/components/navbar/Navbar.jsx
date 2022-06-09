import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import './navbar.css';
import logo from '../../assets/mtl.png';

const Menu = (props) => (
    <>
        <p><a className={props.className} href="#home">Home</a></p>
        <p><a className={props.className} href="#about">About Us</a></p>
        <p><a className={props.className} href="#possibility">Motivation</a></p>
        <p><a className={props.className} href="#features">Company vision</a></p>
        <p><a className={props.className} href="#blog">News</a></p>
    </>
)
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="mtl__navbar">
            <div className="gpt3__navbar-links">
                <div className="mtl__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="mtl__navbar-links_container">
                    <Menu className="mtl__link-element"/>
                </div>
            </div>

            <div className="mtl__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="mtl__navbar-menu_container scale-up-ver-top">
                        <Menu/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;