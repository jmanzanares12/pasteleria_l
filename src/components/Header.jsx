import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/about-us' },
        { name: 'Productos', path: '/products' },
        { name: 'Contacto', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isOpen
                    ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl flex items-center justify-between mx-auto px-6 md:px-12 lg:px-20">

                <Link to='/' className="flex items-center gap-3 z-[70] group">
                    <img
                        src={logo}
                        alt="Logo Pastelería Lilliam"
                        className="w-10 h-10 md:w-11 md:h-11 object-contain transition-transform group-hover:scale-110"
                    />
                    <div className="flex flex-col">
                        <span className={`text-lg md:text-xl font-black tracking-tighter leading-none transition-colors duration-300 ${scrolled || isOpen ? 'text-gray-900' : 'text-black'
                            }`}>
                            Pastelería
                        </span>
                        <span className="text-[12px] uppercase tracking-[0.3em] text-[var(--color-primary)] font-bold">
                            Lilliam
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className={`relative text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-[var(--color-primary)] ${isActive
                                                ? 'text-[var(--color-primary)]'
                                                : scrolled ? 'text-gray-600' : 'text-black'
                                            }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute -bottom-2 left-0 w-full h-0.5 bg-[var(--color-primary)]"
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden z-[70] p-2 text-2xl transition-colors duration-300 ${scrolled || isOpen ? 'text-gray-900' : 'text-black'
                        }`}
                    aria-label="Menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[60] flex flex-col py-18"
                    >
                        <div className="h-[80px]" />

                        <nav className="flex-1 flex flex-col items-center justify-center bg-white">
                            <ul className="flex flex-col gap-8 text-center">
                                {navItems.map((item, i) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            to={item.path}
                                            className={`text-xl font-black uppercase tracking-tighter transition-colors ${location.pathname === item.path
                                                    ? 'text-[var(--color-primary)]'
                                                    : 'text-gray-900'
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        <div className="p-10 text-center bg-white">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">
                                Masaya, Nicaragua
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;