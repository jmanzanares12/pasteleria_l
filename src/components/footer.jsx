import React from 'react';
import logo from '../images/logo.png';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo y redes sociales */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Link to='/pasteleria_l' className='flex items-center space-x-2'>
                                <img src={logo} alt="logo" className="w-20 h-20" />
                                <span className="text-xl font-semibold">Pastelería Lilliam</span>
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100070706032861&locale=es_LA"
                                target="_blank"
                                aria-label="Facebook"
                                className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
                            >
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a
                                href={`https://wa.me/50588174854?text=${encodeURIComponent('Hola, me gustaría saber cómo puedo hacer un encargo de pastel con ustedes')}`}
                                target="_blank"
                                aria-label="Contactar por Whatsapp"
                                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                            >
                                <FaWhatsapp className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Enlaces */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Enlaces de interés</h3>
                        <nav>
                            <ul className="space-y-4">
                                <li><Link to="/pasteleria_l" className="hover:text-indigo-500 transition-colors">Home</Link></li>
                                <li><Link to="/about" className="hover:text-indigo-500 transition-colors">About</Link></li>
                                <li><Link to="/products" className="hover:text-indigo-500 transition-colors">Products</Link></li>
                                <li><Link to="/contact" className="hover:text-indigo-500 transition-colors">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contacto */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contacto</h3>
                        <ul className="space-y-4">
                            <li>pasteleria.lilliam.nicaragua@gmail.com</li>
                            <li>+505 8817 4854</li>
                            <li>Masaya, Nicaragua</li>
                        </ul>
                    </div>
                </div>

                {/* Derechos de autor */}
                <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Pastelería Lilliam. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;