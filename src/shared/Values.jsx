import { values } from '../data/dataValues.js';
import { motion } from 'framer-motion';

const Values = () => (
    <section className="max-w-7xl mx-auto py-24 px-6 sm:px-10 overflow-hidden">
        
        <div className="text-center mb-20">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-[var(--color-primary)] font-black uppercase tracking-[0.4em] text-[10px] mb-4 bg-[var(--color-primary)]/5 px-4 py-1.5 rounded-full inline-block">
                    Nuestra Esencia
                </span>
                <h2 className='text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tighter mt-4'>
                    Compromisos que <span className="text-[var(--color-accent)] italic font-serif">endulzan</span> la vida
                </h2>
                <div className="flex justify-center gap-1 mt-6">
                    <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full" />
                    <div className="w-2 h-1 bg-[var(--color-accent)]/30 rounded-full" />
                </div>
            </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => {
                const Icon = value.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.7, 
                            delay: index * 0.15,
                            ease: [0.21, 0.47, 0.32, 0.98] 
                        }}
                        className="group relative bg-white border border-[var(--color-primary)]/5 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(var(--color-primary-rgb),0.1)] overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/15 transition-all duration-700" />
                        
                        <span className="absolute top-6 right-8 text-5xl font-black text-black/50 select-none group-hover:text-[var(--color-accent)] transition-colors">
                            0{index + 1}
                        </span>

                        <div className="relative mb-10 inline-block">
                            <div className="absolute inset-0 bg-[var(--color-primary)]/10 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-surface)] shadow-sm border border-[var(--color-primary)]/5 text-[var(--color-primary)] group-hover:-rotate-12 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500">
                                <Icon className="h-7 w-7" />
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-[var(--color-muted)] text-[15px] leading-relaxed font-normal opacity-80 group-hover:opacity-100 transition-opacity">
                                {value.text}
                            </p>
                        </div>

                        <div className="absolute bottom-0 right-0 w-0 h-0 border-style-solid border-t-[40px] border-t-transparent border-r-[40px] border-r-[var(--color-accent)]/0 group-hover:border-r-[var(--color-accent)]/10 transition-all duration-500 rounded-br-[2.5rem]" />
                    </motion.div>
                );
            })}
        </div>

        <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent mx-auto mt-24"
        />
    </section>
)

export default Values;