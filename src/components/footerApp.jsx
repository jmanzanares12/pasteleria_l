import React from "react";
import '../styles/footerApp.css';
import {Phone, Email, LocationOn, WhatsApp, Facebook} from '@mui/icons-material';
import logo from '../images/logo.svg'

function FooterApp() {
    return(
        <>
            <footer className="footerApp">
                <div className="generalApp">
                    <img src={logo} alt="logo" />
                    <Phone /> +505 8817 4854
                    <Phone /> +505 8880 4173
                    <Email /> lilliamgaitanflores@gmail.com
                    <LocationOn /> Barrio Camilo Ortega II Etapa, Frente al Museo Camilo Ortega
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