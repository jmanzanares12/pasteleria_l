import { useRef } from 'react';
import { motion } from 'framer-motion';
import { sliderImages } from '../data/data.js';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
    const sliderRef = useRef(null);

    const sliderSettings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    return (
        <section className='relative w-full h-[90vh] md:h-screen overflow-hidden bg-[var(--color-bg)]'>
            <Slider ref={sliderRef} {...sliderSettings}>
                {sliderImages.map((item) => (
                    <div key={item.id} className='relative w-full h-[90vh] md:h-screen'>
                        {/* Imagen con zoom sutil constante */}
                        <motion.img
                            src={item.image}
                            alt={item.alt}
                            className='w-full h-full object-cover'
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "easeOut" }}
                        />
                        
                        {/* Overlay: Cambiamos el negro por un tono marca sutil o un degradado más suave */}
                        <div className='absolute inset-0 bg-gradient-to-r from-[var(--color-text)]/40 via-transparent to-transparent z-10' />
                        
                        {/* Content Container */}
                        <div className='absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-20 lg:px-32'>
                            <div className='max-w-3xl'>
                                <motion.span 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className='text-[var(--color-primary)] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 block'
                                >
                                    Tradición desde hace 30 años
                                </motion.span>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className='text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tighter'
                                >
                                    Donde cada detalle <br />
                                    <span className="text-[var(--color-primary)]">es un arte.</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className='text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-xl'
                                >
                                    En <span className="font-semibold">Pastelería Lilliam</span>, transformamos ingredientes de alta calidad en momentos inolvidables para tu paladar.
                                </motion.p>

                                {/* Call to Action (CTA) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <Link
                                        to="/products"
                                        className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[var(--color-primary-700)] transition-all shadow-lg shadow-[var(--color-primary)]/20 flex items-center gap-2 group"
                                        aria-label="Explorar menú"
                                    >
                                        Explorar Menú
                                        <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    <Link
                                        to="/aboutus"
                                        className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-[var(--color-text)] transition-all"
                                        aria-label="Nuestra historia"
                                    >
                                        Nuestra Historia
                                    </Link>
                                </motion.div>
                            </div>
                        </div>

                        <div className='absolute bottom-12 right-12 z-30 hidden md:block'>
                            <p className='text-white text-xs uppercase tracking-[0.2em] font-medium vertical-text'>
                                {item.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Hero;