import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CTASection = ({ title, description, buttonText, redirectTo }) => {
    const navigate = useNavigate();

    return (
        <section className='max-w-7xl mx-auto px-6 py-20'>
            <div className='relative overflow-hidden bg-[var(--color-surface)] border border-[var(--color-primary)]/20 rounded-[3rem] p-10 md:p-20 text-center shadow-sm'>
                
                {/* Decoración abstracta de fondo */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />

                <div className='relative z-10 max-w-3xl mx-auto'>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-3xl md:text-5xl font-bold mb-6 text-[var(--color-text)] tracking-tight'
                    >
                        {title}
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className='text-lg md:text-xl text-[var(--color-muted)] mb-10 leading-relaxed font-light'
                    >
                        {description}
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='bg-[var(--color-primary)] text-white px-10 py-4 rounded-full hover:bg-[var(--color-primary-700)] transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-[var(--color-primary)]/20 flex items-center gap-3 mx-auto group'
                        onClick={() => navigate(redirectTo)}
                    >
                        {buttonText}
                        <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;