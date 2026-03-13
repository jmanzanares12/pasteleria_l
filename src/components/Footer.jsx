import logo from '../assets/images/logo.png';
import { FaFacebookF, FaWhatsapp, FaPhoneAlt, FaHome, FaMapMarkerAlt } from 'react-icons/fa';
import { RiCake2Fill } from "react-icons/ri";
import { MdEmail, MdContactSupport } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Inicio', path: '/', icon: <FaHome /> },
        { name: 'Nosotros', path: '/about-us', icon: <FaHome /> },
        { name: 'Productos', path: '/products', icon: <RiCake2Fill /> },
        { name: 'Contacto', path: '/contact', icon: <MdContactSupport /> },
    ];

    const socialLinks = [
        { icon: <FaFacebookF />, url: 'https://facebook.com', color: 'hover:bg-blue-600' },
        { icon: <FaWhatsapp />, url: 'https://wa.me/50588174854', color: 'hover:bg-green-500' },
    ];

    return (
        <footer className="bg-[var(--color-bg-footer)] border-t border-gray-100 text-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                    <div className="lg:col-span-4 space-y-6">
                        <Link to='/' className='inline-flex flex-col items-start gap-4 group'>
                            <div className="relative p-2">
                                <img src={logo} alt="Logo Pastelería Lilliam" className="w-16 h-16 object-contain" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black tracking-tighter text-white/90">
                                    Pastelería <span className="text-[var(--color-primary)]">Lilliam</span>
                                </h2>
                                <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase tracking-[0.3em]">
                                    Tradición que se saborea
                                </p>
                            </div>
                        </Link>

                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => (
                                <a key={idx} href={social.url} target="_blank" rel="noreferrer"
                                    className={`p-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white ${social.color}`}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-[var(--color-primary)]/20 pb-2 w-fit">Explorar</h3>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-sm text-gray-600 hover:text-[var(--color-primary)] flex items-center gap-2 transition-colors group">
                                        <span className="text-[var(--color-primary)] group-hover:scale-110 transition-transform opacity-70">{link.icon}</span>
                                        <span className="font-medium text-white/50">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-[var(--color-primary)]/20 pb-2 w-fit">Atención</h3>
                        <div className="space-y-2">
                            <a href="https://wa.me/50588174854" target="_blank" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--color-primary)]/10 transition-colors group">
                                <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                                    <FaPhoneAlt className="text-[var(--color-primary)] text-xs" />
                                </div>
                                <span className="text-sm font-bold text-white/50">+505 8817 4854</span>
                            </a>
                            <a href="mailto:pastelerialilliam@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--color-primary)]/10 transition-colors group">
                                <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                                    <MdEmail className="text-[var(--color-primary)] text-sm" />
                                </div>
                                <span className="text-sm font-bold text-white/50 truncate">pastelerialilliam@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-[var(--color-primary)]/20 pb-2 w-fit">Visítanos</h3>
                        <div className="bg-[var(--color-bg-footer)] p-5">
                            <div className="flex gap-3 text-gray-600">
                                <FaMapMarkerAlt className="text-[var(--color-primary)] shrink-0 mt-1" />
                                <p className="text-sm leading-relaxed font-medium text-white/50">
                                    Masaya, Nicaragua.<br />
                                    <span className="text-[11px] text-gray-400 font-normal italic">Consulte nuestras sucursales</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
                        &copy; {currentYear} Pastelería Lilliam
                    </p>
                    <div className="flex gap-6 text-[10px] uppercase tracking-widest font-black">
                        <span className="hover:text-[var(--color-primary)] cursor-pointer transition-colors">Privacidad</span>
                        <span className="hover:text-[var(--color-primary)] cursor-pointer transition-colors">Términos</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;