import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Efecto para cambiar el estilo al hacer scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/aboutus' },
        { name: 'Productos', path: '/products' },
        { name: 'Contacto', path: '/contact' },
    ];

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                ? 'bg-white/90 backdrop-blur-lg py-3 shadow-[var(--shadow-sm)]' 
                : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl flex items-center justify-between mx-auto px-6 md:px-20 lg:px-32">
                
                {/* Logo con estilo circular minimalista */}
                <Link to='/' className="flex items-center gap-3 group">
                    <div className="relative p-1">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className="w-10 h-10 md:w-12 md:h-12 " 
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-black tracking-tighter text-[var(--color-text)] leading-none">
                            Pastelería
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-primary-700)] font-bold">
                            Lilliam
                        </span>
                    </div>
                </Link>

                {/* Navegación Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-10">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.name}>
                                    <Link 
                                        to={item.path} 
                                        className={`relative text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-[var(--color-primary)] ${
                                            isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]/70'
                                        }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--color-accent)] rounded-full" />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Mobile Trigger */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl text-[var(--color-text)]"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu con estilo moderno */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-[64px] bg-white z-[60] p-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
                    <ul className="flex flex-col gap-8 items-center justify-center h-full">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link 
                                    to={item.path} 
                                    className="text-3xl font-black text-[var(--color-text)] uppercase tracking-tighter hover:text-[var(--color-primary)]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;