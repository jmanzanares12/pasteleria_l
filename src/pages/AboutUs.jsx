import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiStar } from 'react-icons/fi';
import owner from '../assets/images/abuelita.png'
import pastry from '../assets/images/pastel.png'

const AboutView = () => {
    return (
        <main className="pt-4 bg-[var(--color-bg)]">
            <section className="max-w-7xl mx-auto px-6 py-16 text-center">
                <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[var(--color-primary)] font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
                >
                    Nuestra Trayectoria
                </motion.span>
                <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] tracking-tighter mb-8">
                    Tres décadas de tradición, <br />
                    <span className="text-[var(--color-accent)]">quince años de arte dulce.</span>
                </h1>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12 space-y-24">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">El Origen: El Aroma del Pan Recién Horneado</h2>
                        <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6 font-light">
                            Todo comenzó hace más de **30 años**. Nuestra fundadora Lilliam Gaitán inició este sueño con el compromiso de llevar el mejor pan artesanal a cada hogar. La dedicación, el respeto por las recetas tradicionales y la selección de los mejores granos nos permitieron convertirnos en un referente de la panificación local.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold italic">
                                <FiAward /> Tradición Familiar
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="order-1 lg:order-2 rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <div className="img-card">
                            <img src={owner} alt="Lilliam Gaitán, fundadora de Pastelería Lilliam" className="w-full h-full object-cover object-top sepia-[0.2] hover:sepia-0 transition-all duration-700" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <div className="img-card">
                            <img src={pastry} alt="Pastelería creativa" className="w-full h-full object-cover object-top sepia-[0.2] hover:sepia-0 transition-all duration-700"  />
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">La Evolución: El Arte de los Pasteles</h2>
                        <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6 font-light">
                            Hace **15 años**, decidimos expandir nuestra pasión. Lo que inició como panificación se transformó en un taller de arte dulce. Hoy, nos especializamos en convertir tus celebraciones en momentos inolvidables a través de pastelería personalizada.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-[var(--color-primary-700)]">
                            <li className="flex items-center gap-2"> <FiStar className="text-[var(--color-accent)]"/> Bodas</li>
                            <li className="flex items-center gap-2"> <FiStar className="text-[var(--color-accent)]"/> Cumpleaños</li>
                            <li className="flex items-center gap-2"> <FiStar className="text-[var(--color-accent)]"/> Eventos</li>
                            <li className="flex items-center gap-2"> <FiStar className="text-[var(--color-accent)]"/> Diseños Únicos</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 mt-20">
                <div className="max-w-4xl mx-auto px-6 text-center italic">
                    <p className="text-2xl md:text-3xl text-[var(--color-text)] font-light leading-snug">
                        "Cada pastel que creamos es una obra de amor, una fusión de tradición y creatividad que busca endulzar tus momentos más especiales."
                    </p>
                    <div className="mt-8 flex justify-center gap-2 text-[var(--color-accent)]">
                        <FiHeart fill="currentColor" />
                        <FiHeart fill="currentColor" />
                        <FiHeart fill="currentColor" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutView;