import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import '../styles/headerApp.css';

function HeaderApp() {
    return (
        <header className="headerApp">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="content">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/quienes-somos">Quienes somos</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderApp;

