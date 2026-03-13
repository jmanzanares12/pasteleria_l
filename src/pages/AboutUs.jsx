import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiHeart, FiStar, FiCheckCircle } from 'react-icons/fi';
import owner from '../assets/images/abuelita.avif';
import pastry from '../assets/images/pastel.avif';

const AboutUs = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Suavizamos el efecto para que en móvil no sea tan brusco
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

    return (
        <main ref={targetRef} className="bg-[var(--color-bg)] overflow-hidden">
            {/* Header de Sección */}
            <section className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-6">
                        Nuestra Herencia
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[var(--color-text)] tracking-tighter mb-8 leading-[1.1] md:leading-[0.9]">
                        Tres décadas de tradición, <br className="hidden sm:block" />
                        <span className="text-[var(--color-accent)] italic font-serif">arte que se saborea.</span>
                    </h1>
                </motion.div>
            </section>

            {/* Stats Card - Ajustada para 2x2 en móvil */}
            <section className="max-w-5xl mx-auto px-6 mb-20 md:mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 py-10 rounded-[2rem] border border-gray-100 bg-white/50 shadow-sm mb-16">
                    {[
                        { label: 'Años de Panadería', val: '30+' },
                        { label: 'Maestría Pastelera', val: '15+' },
                        { label: 'Recetas Únicas', val: '100%' },
                        { label: 'Clientes Felices', val: '1000+' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center px-2">
                            <p className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-1">{stat.val}</p>
                            <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[var(--color-muted)] font-bold leading-tight">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32 pb-24">

                {/* Bloque 1: El Origen */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 space-y-6"
                    >
                        <div className="flex items-center gap-2 text-[var(--color-accent)] font-black text-xs tracking-widest uppercase">
                            <FiAward className="text-xl" /> Desde 1996
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight">
                            El Origen: <br /> El Aroma del Pan Recién Horneado
                        </h2>
                        <div className="space-y-4 text-[var(--color-muted)] text-base md:text-lg leading-relaxed font-light">
                            <p>
                                Todo comenzó con <strong className="font-semibold text-[var(--color-primary)]">Lilliam Gaitán</strong>. Lo que empezó en un pequeño horno casero, movido por la pasión de alimentar corazones, se convirtió en el pilar de nuestra familia.
                            </p>
                            <p>
                                La clave nunca cambió: granos seleccionados, procesos lentos y el respeto absoluto por la masa madre.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ opacity, scale }}
                        className="order-1 lg:order-2 relative px-4 md:px-0"
                    >
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl border-[12px] border-white">
                            <img src={owner} alt="Lilliam Gaitán" className="w-full h-full object-cover sepia-[0.2] hover:sepia-0 transition-all duration-700 scale-110 hover:scale-100" />
                        </div>
                        <div className="absolute -bottom-6 -left-2 md:-left-6 bg-white p-5 md:p-6 rounded-2xl shadow-xl border border-[var(--color-primary)]/10 max-w-[240px] md:max-w-xs">
                            <p className="text-[var(--color-primary)] font-serif italic text-lg md:text-xl">"Calidad sobre cantidad, siempre."</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bloque 2: La Evolución */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group px-8 md:px-0"
                    >
                        <div className="aspect-square rounded-full overflow-hidden border-[8px] md:border-[16px] border-[var(--color-primary)]/5 shadow-2xl">
                            <img src={pastry} alt="Arte Pastelero" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg rotate-12">
                            <FiStar className="text-xl md:text-2xl animate-[spin_8s_linear_infinite]" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight">
                            La Evolución: <br /> El Arte de los Pasteles
                        </h2>
                        <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed font-light">
                            Hace 15 años, el azúcar se convirtió en nuestro lienzo. Evolucionamos de la panadería tradicional a la <span className="text-[var(--color-primary)] font-bold italic">pastelería de autor</span>, donde cada pedido cuenta una historia diferente.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                            {['Bodas de Ensueño', 'Cumpleaños Temáticos', 'Eventos Corporativos', 'Diseños de Autor'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group cursor-default">
                                    <FiCheckCircle className="text-[var(--color-accent)] shrink-0 group-hover:scale-125 transition-transform" />
                                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cita Final */}
            <section className="py-20 md:py-32 relative overflow-hidden mb-20">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <FiHeart className="text-3xl md:text-4xl text-[var(--color-accent)] mx-auto mb-8 opacity-40" />
                    <h3 className="text-xl md:text-4xl text-[var(--color-text)] font-serif italic leading-relaxed px-4">
                        "No solo horneamos pasteles; horneamos los centros de mesa de tus recuerdos más preciados."
                    </h3>
                    <p className="mt-8 font-black uppercase tracking-[0.4em] text-[var(--color-primary)] text-[10px] md:text-xs">
                        — Familia Gaitán
                    </p>
                </div>
                {/* Decoración */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            </section>
        </main>
    );
};

export default AboutUs;