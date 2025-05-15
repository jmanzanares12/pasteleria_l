// src/components/shared/Values.jsx
import { FiAward, FiEye, FiHeart } from 'react-icons/fi';

const values = [
    {
        icon: <FiAward className='h-8 w-8 text-rose-600 mb-4' />,
        title: 'Misión',
        text: 'Crear experiencias memorables a través de la repostería artesanal...',
    },
    {
        icon: <FiEye className='h-8 w-8 text-rose-600 mb-4' />,
        title: 'Visión',
        text: 'Ser reconocidos como la pastelería líder en innovación y calidad...',
    },
    {
        icon: <FiHeart className='h-8 w-8 text-rose-600 mb-4' />,
        title: 'Compromiso',
        text: 'Utilizar siempre ingredientes de primera calidad...',
    },
];

const Values = () => (
    <section className='py-40 mb-16'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8'>
            {values.map((value, index) => (
                <div
                    key={index}
                    className='bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-rose-300'
                >
                    <div className='bg-rose-100 w-fit p-4 rounded-2xl mb-6'>{value.icon}</div>
                    <h3 className='text-3xl font-bold text-gray-800 hover:text-rose-600 transition-colors duration-300 font-[Playfair_Display] mb-4'>
                        {value.title}
                    </h3>
                    <p className='text-xl text-gray-600 leading-relaxed'>{value.text}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Values;
