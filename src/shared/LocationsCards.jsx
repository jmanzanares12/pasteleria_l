import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';

const CTASection = ({ title, description, buttonText, redirectTo = '/' }) => {
    const navigate = useNavigate();

    return (
        <section className='max-w-7xl mx-auto px-6 py-20 overflow-hidden'>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className='relative overflow-hidden bg-white border border-gray-100 rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 text-center shadow-[0_40px_100px_-30px_rgba(0,0,0,0.03)]'
            >
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="absolute top-8 left-8 text-[var(--color-accent)]/20 animate-pulse hidden sm:block">
                    <FiStar size={32} />
                </div>
                <div className="absolute bottom-8 right-8 text-[var(--color-primary)]/20 animate-bounce hidden sm:block">
                    <FiStar size={24} />
                </div>

                <div className='relative z-10 max-w-3xl mx-auto space-y-10'>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-5 py-2 rounded-full bg-gray-50 text-[var(--color-primary)] font-black uppercase tracking-[0.3em] text-[9px] border border-gray-100"
                    >
                        Paso Siguiente
                    </motion.span>

                    <h2 className='text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[1] md:leading-[0.9]'>
                        {title}
                    </h2>

                    <p className='text-lg md:text-2xl text-gray-500 leading-relaxed font-light italic font-serif max-w-2xl mx-auto'>
                        "{description}"
                    </p>

                    <div className="pt-6">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            className='relative overflow-hidden bg-gray-900 text-white px-10 py-5 rounded-2xl transition-all duration-300 text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-4 mx-auto group shadow-xl'
                            onClick={() => navigate(redirectTo)}
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            <span className="relative z-10">{buttonText}</span>
                            <FiArrowRight className="text-xl relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;