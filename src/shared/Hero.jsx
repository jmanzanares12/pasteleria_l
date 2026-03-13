import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import pasteleria from '../assets/images/pasteleria.avif';
import Container from '../shared/Container';

const Hero = () => {
    return (
        <section className='relative h-[60vh] md:h-[70vh] min-h-[500px] w-full bg-gray-100 overflow-hidden'>
            <div className='absolute inset-0'>
                <img
                    src={pasteleria}
                    alt='Hero Image'
                    className='w-full h-full object-cover object-[75%_center] md:object-center'
                />
                <div className='absolute inset-0 bg-black/40 md:bg-black/30 z-10' />
                <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10' />
            </div>

            <Container>
                <div className='relative z-20 h-full flex flex-col items-start py-25 justify-center'>
                    <div className='max-w-3xl'>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className='text-[var(--color-primary)] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block'
                        >
                            Tradición desde hace 30 años
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className='text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tighter'
                        >
                            Donde cada detalle <br className="hidden sm:block" />
                            <span className="text-[var(--color-primary)] italic font-serif">es un arte.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className='text-white/90 text-base md:text-xl mb-10 leading-relaxed font-light max-w-xl'
                        >
                            En <span className="font-semibold text-white">Pastelería Lilliam</span>, transformamos ingredientes de alta calidad en momentos inolvidables.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                to="/products"
                                className="w-full sm:w-auto bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-widest hover:brightness-110 transition-all shadow-lg shadow-[var(--color-primary)]/20 flex justify-center items-center gap-2 group"
                            >
                                Explora nuestro catálogo
                                <FiChevronRight className="group-hover:translate-x-1 transition-transform text-lg" />
                            </Link>

                            <Link
                                to="/aboutus"
                                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-black transition-all text-center"
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