import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';

const CTASection = ({ title, description, buttonText, redirectTo }) => {
    const navigate = useNavigate();

    return (
        <section className='max-w-7xl mx-auto px-6 py-14'>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className='relative overflow-hidden bg-white border border-gray-200 rounded-[4rem] p-12 md:p-24 text-center shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)]'
            >

                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="absolute top-10 left-10 text-[var(--color-accent)]/20 animate-pulse">
                    <FiStar size={32} />
                </div>
                <div className="absolute bottom-10 right-10 text-[var(--color-primary)]/20 animate-bounce">
                    <FiStar size={24} />
                </div>

                <div className='relative z-10 max-w-3xl mx-auto space-y-8'>
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-black uppercase tracking-[0.3em] text-[9px]"
                    >
                        Paso Siguiente
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-4xl md:text-6xl font-bold text-[var(--color-text)] tracking-tighter leading-[0.95]'
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className='text-lg md:text-2xl text-[var(--color-muted)] leading-relaxed font-light italic font-serif'
                    >
                        "{description}"
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="pt-6"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "var(--color-primary)",
                                boxShadow: "0 20px 40px -10px rgba(var(--color-primary-rgb), 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className='relative overflow-hidden bg-[var(--color-text)] text-white px-12 py-5 rounded-2xl transition-all duration-300 text-[10px] font-black uppercase tracking-[0.25em] shadow-2xl flex items-center gap-4 mx-auto group'
                            onClick={() => navigate(redirectTo)}
                        >
                            <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000" />

                            <span className="relative z-10">{buttonText}</span>
                            <FiArrowRight className="text-xl relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                        </motion.button>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
            </motion.div>
        </section>
    );
};

export default CTASection;