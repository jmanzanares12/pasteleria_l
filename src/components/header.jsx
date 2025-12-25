import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/logo.png'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/aboutus' },
        { name: 'Productos', path: '/products' },
        { name: 'Contacto', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-primary)]/10" role="banner">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
                
                {/* Brand / Logo */}
                <div className="flex-shrink-0">
                    <Link to='/' className='flex items-center gap-3 group' aria-label="Inicio - Pasteleria Lilliam">
                        <div className="relative">
                            <img 
                                src={logo} 
                                alt="Pasteleria Lilliam" 
                                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[var(--color-primary)] transition-transform duration-300 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                        </div>
                        <span className="text-[var(--color-primary-700)] font-bold text-lg md:text-xl tracking-tight leading-tight">
                            Pastelería <span className="text-[var(--color-accent)]">Lilliam</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block" aria-label="Main navigation">
                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link 
                                    to={item.path} 
                                    className="text-[var(--color-text)] text-sm font-semibold uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors relative py-2 group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg text-[var(--color-primary-700)] hover:bg-[var(--color-primary)]/10 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-bg)] border-b border-[var(--color-primary)]/10 shadow-xl py-6 px-6 animate-in fade-in slide-in-from-top-4 duration-300">
                        <ul className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link 
                                        to={item.path} 
                                        className="block text-center text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-primary)]"
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

