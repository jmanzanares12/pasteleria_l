import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiAlertCircle, FiArrowUpRight } from 'react-icons/fi';

const LocationCard = ({ location }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative h-[480px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-gray-900"
        >
            <img
                src={location.image}
                alt={location.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute top-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white uppercase font-bold tracking-widest">Sucursal Activa</span>
                </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-7 rounded-[2.5rem] text-white transition-all duration-500 group-hover:bg-white/15 group-hover:-translate-y-2">

                    <div className="flex justify-between items-start mb-5">
                        <div className="space-y-1">
                            <h3 className="text-3xl font-extrabold tracking-tight leading-none group-hover:text-[var(--color-accent)] transition-colors">
                                {location.name}
                            </h3>
                            <p className="text-[var(--color-accent)] text-[10px] uppercase tracking-[0.3em] font-black">
                                Nicaragua
                            </p>
                        </div>
                        <a
                            href={`https://maps.google.com/?q=${location.address}`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[var(--color-accent)] p-3 rounded-2xl hover:scale-110 transition-transform shadow-lg shadow-[var(--color-accent)]/30"
                        >
                            <FiArrowUpRight className="text-white text-xl" />
                        </a>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3 opacity-95 group/info">
                            <div className="mt-1 p-1 bg-white/10 rounded-lg group-hover/info:bg-[var(--color-accent)]/20 transition-colors">
                                <FiMapPin className="text-[var(--color-accent)] text-sm" />
                            </div>
                            <p className="text-sm leading-relaxed font-medium text-gray-100">
                                {location.address}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <FiClock className="text-[var(--color-accent)] shrink-0" />
                                <span className="text-[11px] font-bold uppercase tracking-wider">{location.hours}</span>
                            </div>

                            <div className="flex items-center gap-2 text-rose-300">
                                <FiAlertCircle className="shrink-0" />
                                <span className="text-[11px] font-bold uppercase tracking-wider italic">{location.closed}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LocationCard;