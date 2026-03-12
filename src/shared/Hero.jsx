import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import masaya from '../assets/images/masaya.avif';
import Container from '../shared/Container';

const Hero = () => {
    return (
        <section className='relative h-[50vh] md:h-[60vh] min-h-[400px] w-full bg-white overflow-hidden'>
            <div className='absolute inset-0'>
                <img src={masaya} alt='Hero Image' className='w-full h-full object-cover object-center' />
            </div>
            <div className='absolute inset-0 bg-black/30 z-10' />
            <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent z-10' />
            <Container>
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
                                Explora nuestro catalogo
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
            </Container>
        </section>
    );
};

export default Hero;