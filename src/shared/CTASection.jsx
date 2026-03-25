import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';

const CTASection = ({ title, description, buttonText, redirectTo }) => {
    const navigate = useNavigate();

    return (
        <section className='max-w-5xl mx-auto px-8 py-10 '>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className='relative overflow-hidden bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-16 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)]'
            >

                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-80 h-80 bg-[var(--color-primary)]/10 rounded-full blur-[80px] pointer-events-none" />

                <div className='relative z-10 max-w-2xl mx-auto space-y-6'>
                    <motion.span
                        className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold uppercase tracking-widest text-[10px]"
                    >
                        Paso Siguiente
                    </motion.span>

                    <h2 className='text-3xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight'>
                        {title}
                    </h2>

                    <p className='text-base md:text-lg text-[var(--color-muted)] leading-relaxed font-serif italic'>
                        "{description}"
                    </p>

                    <div className="pt-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='bg-[var(--color-text)] text-white px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-3 mx-auto group transition-all'
                            onClick={() => navigate(redirectTo)}
                        >
                            <span>{buttonText}</span>
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;