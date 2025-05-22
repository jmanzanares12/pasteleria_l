import { values } from '../data/dataValues.js';

const Values = () => (
    <section className="py-20 px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
                <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                >
                    {/* Texto */}
                    <div className="w-full md:w-2/3 text-center md:text-left mb-6 md:mb-0 md:mr-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 font-[Playfair_Display]">
                            {value.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{value.text}</p>
                    </div>

                    {/* Ícono */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                        <div className="bg-green-100 p-4 rounded-full">
                            <Icon className="h-16 w-16 text-green-600" />
                        </div>
                    </div>
                </div>
            );
        })}
    </section>
);

export default Values;
