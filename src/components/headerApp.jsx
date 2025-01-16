import React from "react";
import logo from "../assets/images/logo.svg";
import '../styles/headerApp.css';

function HeaderApp() {
    return (
        <>
            <header className="headerApp">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="content">
                    <ul>
                        <li><a href="">Quienes somos</a></li>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Contactanos</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default HeaderApp