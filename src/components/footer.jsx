import logo from '../assets/images/logo.png';
import { FaFacebook, FaWhatsapp, FaPhone, FaHome } from 'react-icons/fa'; 
import { RiCake2Fill } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { CiMail } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-surface)] border-t border-[var(--color-primary)]/10 text-[var(--color-text)]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Columna 1: Marca y Propósito */}
                    <div className="col-span-1 lg:col-span-1 space-y-6">
                        <Link to='/' className='flex flex-col items-start gap-4 group'>
                            <img src={logo} alt="Pastelería Lilliam" className="w-16 h-16 rounded-full border border-[var(--color-primary)]/20 group-hover:scale-105 transition-transform" />
                            <div>
                                <span className="text-xl font-bold tracking-tight text-[var(--color-primary-700)]">
                                    Pastelería <span className="text-[var(--color-accent)]">Lilliam</span>
                                </span>
                                <p className="text-xs text-[var(--color-muted)] mt-2 font-medium uppercase tracking-widest">
                                    Endulzando tus momentos
                                </p>
                            </div>
                        </Link>
                        
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" className="p-2 rounded-full bg-white border border-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all">
                                <FaFacebook className="h-5 w-5" />
                            </a>
                            <a href="https://wa.me/50588174854" target="_blank" className="p-2 rounded-full bg-white border border-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all">
                                <FaWhatsapp className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Navegación */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary-700)]">Explorar</h3>
                        <nav>
                            <ul className="space-y-3 text-sm text-[var(--color-muted)] font-medium">
                                <li><Link to='/' className="hover:text-[var(--color-primary)] transition-colors"><FaHome className="inline mr-1" /> Inicio</Link></li>
                                <li><Link to='/products' className="hover:text-[var(--color-primary)] transition-colors"><RiCake2Fill className="inline mr-1" /> Productos</Link></li>
                                <li><Link to='/contact' className="hover:text-[var(--color-primary)] transition-colors"><GrContact className="inline mr-1" /> Contacto</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Columna 3: Información de contacto */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary-700)]">Contacto</h3>
                        <div className="text-sm text-[var(--color-muted)] font-medium leading-relaxed flex flex-col space-y-2">
                            <a href="tel:+50588174854" className="hover:text-[var(--color-primary)] transition-colors"><FaPhone className="inline mr-1" /> +505 8817 4854</a>
                            <a href="mailto:pastelerialilliam@gmail.com" className="hover:text-[var(--color-primary)] transition-colors"><CiMail className="inline mr-1" /> pastelerialilliam@gmail.com</a>
                        </div>
                    </div>

                    {/* Columna 4: Ubicación Principal */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary-700)]">Ubicación</h3>
                        <div className="text-sm text-[var(--color-muted)] font-medium leading-relaxed">
                            <p>Masaya, Nicaragua</p>
                            <p className="mt-1 italic text-[var(--color-accent)]">Envíos disponibles en zona central</p>
                        </div>
                    </div>
                </div>

                {/* Línea final de Copyright */}
                <div className="border-t border-[var(--color-primary)]/10 mt-16 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-muted)]">
                        &copy; {currentYear} Pastelería Lilliam. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;