import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';
import { locations } from '../data/dataLocation';
import LocationCard from '../shared/LocationsCards';

const ContactMethod = ({ icon: Icon, title, value, link, color }) => (
    <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-6 p-6 bg-white rounded-[2rem] border border-[var(--color-primary)]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${color}`}>
            <Icon size={24} />
        </div>
        <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--color-muted)] mb-1">{title}</h4>
            <p className="text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{value}</p>
        </div>
    </a>
);

const OrderGuide = () => (
    <div className="bg-[var(--color-surface)] p-8 md:p-12 rounded-[3rem] border border-[var(--color-primary)]/5">
        <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">¿Cómo realizar tu pedido?</h3>
        <div className="space-y-6">
            {[
                "Elige tu diseño o temática favorita.",
                "Define la fecha y hora de tu evento.",
                "Calcula el número de porciones necesarias.",
                "Escríbenos para cotizar y confirmar disponibilidad."
            ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 text-[var(--color-primary)]">
                        <FiCheckCircle size={20} />
                    </div>
                    <p className="text-[var(--color-text)] font-light">{step}</p>
                </div>
            ))}
        </div>
        <div className="mt-10 p-4 bg-[var(--color-accent)]/10 rounded-2xl border border-[var(--color-accent)]/20">
            <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-tight text-center">
                Recomendamos encargar con 3-5 días de anticipación
            </p>
        </div>
    </div>
);

const Contact = () => {
    return (
        <main className="pt-4 bg-[var(--color-bg)] pb-20">
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[var(--color-text)]">Nuestras Casas Dulces</h2>
                    <p className="text-[var(--color-muted)] mt-2">Encuentra tu Pastelería Lilliam más cercana</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <LocationCard key={index} location={loc} />
                    ))}
                </div>

                <div className="pt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">¡Haz tu pedido hoy!</h2>
                            <p className="text-[var(--color-muted)] font-light text-lg">
                                Elige el canal que prefieras. Estamos listos para asesorarte y crear algo único para ti.
                            </p>
                        </div>

                        <ContactMethod 
                            icon={FiMessageCircle}
                            title="WhatsApp"
                            value="+505 8817 4854"
                            link="https://wa.me/50588174854"
                            color="bg-green-500"
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <OrderGuide />
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Contact;