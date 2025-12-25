import { values } from '../data/dataValues.js';
import { motion } from 'framer-motion';

const Values = () => (
    <section className="max-w-7xl mx-auto py-24 px-6 sm:px-10">
        {/* Cabecera de Sección con Estilo */}
        <div className="text-center mb-16">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[var(--color-primary)] font-bold uppercase tracking-[0.2em] text-xs mb-3 block"
            >
                Nuestra Esencia
            </motion.span>
            <h2 className='text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight'>
                Compromisos que <span className="text-[var(--color-accent)]">endulzan</span> la vida
            </h2>
            <div className="w-20 h-1 bg-[var(--color-primary)]/20 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid de Valores */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {values.map((value, index) => {
                const Icon = value.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-[var(--color-surface)] border border-[var(--color-primary)]/10 rounded-[2rem] p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-2"
                    >
                        {/* Decoración de fondo sutil */}
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-primary)]/10 transition-colors" />

                        {/* Contenedor del Icono - Estilo Minimalista */}
                        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-3xl bg-white shadow-sm border border-[var(--color-primary)]/5 text-[var(--color-primary)] group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500">
                            <Icon className="h-10 w-10" />
                        </div>

                        {/* Texto */}
                        <h3 className="text-xl font-bold text-[var(--color-text)] mb-4 tracking-tight">
                            {value.title}
                        </h3>
                        <p className="text-[var(--color-muted)] text-base leading-relaxed font-light">
                            {value.text}
                        </p>

                        {/* Detalle final: Línea decorativa inferior */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-[var(--color-accent)]/20 rounded-full group-hover:w-16 group-hover:bg-[var(--color-accent)] transition-all duration-500" />
                    </motion.div>
                );
            })}
        </div>
    </section>
)

export default Values;
