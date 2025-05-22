import { locations } from '../data/dataLocation.js';
import { FiMapPin, FiClock } from 'react-icons/fi';

const LocationsCards = () => {
    return (
        <section className='max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>
                Encuentranos en nuestras siguientes tiendas...
            </h2>
            <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-center'>
                {locations.map((location, index) => (
                    <div key={index} className='bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                        <img src={location.image} alt={location.name} className='h-48 w-full object-cover rounded-2xl mb-4' />
                        <div className='bg-rose-100 w-fit p-6 rounded-xl mb-4'>
                            <FiMapPin className='h-8 w-8 text-rose-600' />
                        </div>
                        <h3 className='text-2xl font-bold text-gray-800 mb-2'>{location.name}</h3>
                        <p className='text-gray-700 mb-4'>
                            {location.address}
                        </p>
                        <div className='flex items-center text-gray-700 gap-2'>
                            <FiClock className='text-rose-600 h-6 w-6' />
                            <span>{location.hours}</span>
                        </div>
                        <div className='flex items-center text-gray-700 gap-2 mt-2'>
                            <FiClock className='text-rose-600 h-6 w-6' />
                            <span>{location.closed}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LocationsCards;
