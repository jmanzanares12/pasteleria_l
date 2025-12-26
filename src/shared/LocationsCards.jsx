import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiAlertCircle } from 'react-icons/fi';
import { locations } from '../data/dataLocation';

const LocationCard = ({ location }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-lg border border-white/20"
        >
            {/* Imagen de fondo */}
            <img 
                src={location.image} 
                alt={location.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Contenido flotante */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2rem] text-white">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold tracking-tight">{location.name}</h3>
                    <div className="bg-[var(--color-accent)] p-2 rounded-full">
                        <FiMapPin className="text-white text-sm" />
                    </div>
                </div>

                <div className="space-y-3 text-sm font-light">
                    <p className="flex items-start gap-2 opacity-90">
                        <span className="font-bold text-[var(--color-primary)] mt-1">•</span>
                        {location.address}
                    </p>
                    <div className="flex items-center gap-2 opacity-90">
                        <FiClock className="text-[var(--color-primary)]" />
                        <span>{location.hours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-rose-300 font-medium">
                        <FiAlertCircle />
                        <span>{location.closed}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LocationCard;