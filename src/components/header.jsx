import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Productos', path: '/products' },
        { name: 'Contacto', path: '/contact' }
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link to='/' className='flex items-center space-x-2'>
                            <img src={logo} alt="logo" className="w-20 h-20" />
                            <span className="text-xl font-bold text-red-800">Pasteleria Lilliam</span>
                        </Link>
                    </div>

                    {/* Navbar */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-10">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-rose-800 hover:text-indigo-600 font-bold transition-all duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Navbar */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4">
                        <ul className="flex flex-col items-center space-y-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
