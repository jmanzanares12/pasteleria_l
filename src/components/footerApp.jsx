import React from "react";
import '../styles/footerApp.css';
import logo from '../images/logo.svg'

function FooterApp() {
    return(
        <>
            <footer className="footerApp">
                <div className="imgApp">
                    <img src={logo} alt="logo" />
                </div>
                <div className="addressApp">
                    <ul>
                        <li>Barrio Camilo Ortega II Etapa, Frente al Museo Camilo Ortega, Masaya.</li>
                        <li>Barrio Camilo Ortega II Etapa, Del Museo Camilo Ortega 25 metros al este, Masaya.</li>
                        <li>Mercado Municipal Ernesto Fernandez, Sector Pastelero, Masaya</li>
                        <li>Calle Atravezada, Frente a Financiera Fama, Granada</li>
                        <li>Entrada Principal de Diriomo, 50 metros al este, Diriomo.</li>
                    </ul>
                </div>


            </footer>
        </>
    )   
}

export default FooterApp;