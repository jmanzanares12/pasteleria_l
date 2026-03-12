import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiHeart, FiStar, FiCheckCircle } from 'react-icons/fi';
import owner from '../assets/images/abuelita.png'
import pastry from '../assets/images/pastel.png'

const AboutUs = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <main ref={targetRef} className="bg-[var(--color-bg)] overflow-hidden">
            <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
                        Nuestra Herencia
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text)] tracking-tighter mb-8 leading-[0.9]">
                        Tres décadas de tradición, <br />
                        <span className="text-[var(--color-accent)] italic font-serif">arte que se saborea.</span>
                    </h1>
                </motion.div>
            </section>

            <section className="max-w-5xl mx-auto px-6 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-[var(--color-primary)]/10">
                    {[
                        { label: 'Años de Panadería', val: '30+' },
                        { label: 'Maestría Pastelera', val: '15+' },
                        { label: 'Recetas Únicas', val: '100%' },
                        { label: 'Clientes Felices', val: '1000+' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-3xl font-bold text-[var(--color-primary)]">{stat.val}</p>
                            <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 space-y-32 pb-24">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 space-y-6"
                    >
                        <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase">
                            <FiAward className="text-xl" /> Desde 1996
                        </div>
                        <h2 className="text-4xl font-bold text-[var(--color-text)] leading-tight">
                            El Origen: <br/> El Aroma del Pan Recién Horneado
                        </h2>
                        <p className="text-[var(--color-muted)] text-lg leading-relaxed font-light">
                            Todo comenzó con <strong className="font-semibold text-[var(--color-primary)]">Lilliam Gaitán</strong>. Lo que empezó en un pequeño horno casero, movido por la pasión de alimentar corazones, se convirtió en el pilar de nuestra familia. 
                        </p>
                        <p className="text-[var(--color-muted)] text-lg leading-relaxed font-light">
                            La clave nunca cambió: granos seleccionados, procesos lentos y el respeto absoluto por la masa madre.
                        </p>
                    </motion.div>

                    <motion.div 
                        style={{ opacity, scale }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl border-8 border-white">
                            <img src={owner} alt="Lilliam Gaitán" className="w-full h-full object-cover sepia-[0.3] hover:sepia-0 transition-all duration-700 scale-110 hover:scale-100" />
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-[var(--color-surface)] p-6 rounded-2xl shadow-xl hidden md:block border border-[var(--color-primary)]/10">
                            <p className="text-[var(--color-primary)] font-serif italic text-xl">"Calidad sobre cantidad, siempre."</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="aspect-square rounded-full overflow-hidden border-[12px] border-[var(--color-primary)]/5 shadow-2xl">
                            <img src={pastry} alt="Arte Pastelero" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg rotate-12">
                            <FiStar className="text-2xl animate-spin-slow" />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-[var(--color-text)] leading-tight">
                            La Evolución: <br/> El Arte de los Pasteles
                        </h2>
                        <p className="text-[var(--color-muted)] text-lg leading-relaxed font-light">
                            Hace 15 años, el azúcar se convirtió en nuestro lienzo. Evolucionamos de la panadería tradicional a la <span className="text-[var(--color-primary)] font-bold text-italic">pastelería de autor</span>, donde cada pedido cuenta una historia diferente.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['Bodas de Ensueño', 'Cumpleaños Temáticos', 'Eventos Corporativos', 'Diseños de Autor'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group cursor-default">
                                    <FiCheckCircle className="text-[var(--color-accent)] group-hover:scale-125 transition-transform" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cita Final con Background suave */}
            <section className="py-16 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <FiHeart className="text-4xl text-[var(--color-accent)] mx-auto mb-8 opacity-50" />
                    <h3 className="text-2xl md:text-4xl text-[var(--color-text)] font-serif italic leading-relaxed">
                        "No solo horneamos pasteles; horneamos los centros de mesa de tus recuerdos más preciados."
                    </h3>
                    <p className="mt-8 font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] text-xs">
                        — Familia Gaitán
                    </p>
                </div>
                {/* Elementos decorativos de fondo */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            </section>
        </main>
    );
};

export default AboutUs;