import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';
import { locations } from '../data/dataLocation';
import LocationCard from '../shared/LocationsCards';

const ContactMethod = ({ icon: Icon, title, value, link, color }) => (
    <motion.a
        whileTap={{ scale: 0.98 }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 ${color}`}>
            <Icon size={window.innerWidth < 768 ? 20 : 24} />
        </div>
        <div className="min-w-0">
            <h4 className="text-[10px] md:text-sm font-black uppercase tracking-widest text-[var(--color-muted)] mb-0.5 md:mb-1">{title}</h4>
            <p className="text-base md:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors truncate">
                {value}
            </p>
        </div>
    </motion.a>
);

const OrderGuide = () => (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-[var(--color-primary)]/10 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-8">¿Cómo realizar tu pedido?</h3>
        <div className="space-y-6">
            {[
                "Elige tu diseño o temática favorita.",
                "Define la fecha y hora de tu evento.",
                "Calcula el número de porciones necesarias.",
                "Escríbenos para cotizar y confirmar disponibilidad."
            ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 text-[var(--color-primary)] shrink-0">
                        <FiCheckCircle size={20} />
                    </div>
                    <p className="text-[var(--color-text)] text-sm md:text-base font-light leading-relaxed">{step}</p>
                </div>
            ))}
        </div>
        <div className="mt-10 p-5 bg-[var(--color-accent)]/5 rounded-2xl border border-dashed border-[var(--color-accent)]/30">
            <p className="text-[10px] md:text-xs font-black text-[var(--color-accent)] uppercase tracking-widest text-center leading-tight">
                Recomendamos encargar con <br className="md:hidden" /> 3-5 días de anticipación
            </p>
        </div>
    </div>
);

const Contact = () => {
    return (
        <main className="pt-6 bg-[var(--color-bg)] pb-20">
            <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-black text-[var(--color-text)] tracking-tight"
                    >
                        Nuestras Casas Dulces
                    </motion.h2>
                    <p className="text-[var(--color-muted)] mt-3 text-sm md:text-base">Encuentra tu Pastelería Lilliam más cercana</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <LocationCard location={loc} />
                        </motion.div>
                    ))}
                </div>

                <div className="pt-20 md:pt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="space-y-6 md:sticky md:top-24">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text)] mb-4 tracking-tight">¡Haz tu pedido hoy!</h2>
                            <p className="text-[var(--color-muted)] font-light text-lg leading-relaxed">
                                Elige el canal que prefieras. Estamos listos para asesorarte y crear algo único para ti.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <ContactMethod
                                icon={FiMessageCircle}
                                title="WhatsApp"
                                value="+505 8817 4854"
                                link="https://wa.me/50588174854"
                                color="bg-[#25D366]"
                            />

                            <ContactMethod
                                icon={FiPhone}
                                title="Llamada Directa"
                                value="+505 8817 4854"
                                link="tel:+50588174854"
                                color="bg-blue-500"
                            />

                            <ContactMethod
                                icon={FiMail}
                                title="Correo Electrónico"
                                value="pastelerialilliam@gmail.com"
                                link="mailto:pastelerialilliam@gmail.com"
                                color="bg-[var(--color-primary)]"
                            />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <OrderGuide />
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Contact;