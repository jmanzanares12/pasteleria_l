import React from "react";
import '../styles/footerApp.css';
import { Phone, Email, LocationOn, WhatsApp, Facebook } from '@mui/icons-material';
import logo from '../assets/images/logo.svg';   

function FooterApp() {
    return (
        <>
            <footer className="footerApp">
                <div className="logoApp">
                    <h2>Pasteleria Lilliam</h2>
                    <img src={logo} alt="logo" />
                </div>
                <div className="generalApp">
                    <h3>Contáctanos</h3>
                    <div className="contactItem">
                        <Phone /> +505 8817 4854
                    </div>
                    <div className="contactItem">
                        <Phone /> +505 8880 4173
                    </div>
                    <div className="contactItem">
                        <Email /> lilliamgaitanflores@gmail.com
                    </div>
                    <div className="contactItem">
                        <LocationOn /> Barrio Camilo Ortega II Etapa, Frente al Museo Camilo Ortega
                    </div>
                </div>

                <div className="aboutUsApp">
                    <h3>Sobre nosotros</h3>
                    <ul>
                        <li><a href="">Quienes somos</a></li>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Contactanos</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default FooterApp;