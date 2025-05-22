import { useState } from 'react';
import { FiUser, FiPhone, FiMail, FiCalendar, FiInfo, FiEdit } from 'react-icons/fi';

const InputIcon = ({ icon: Icon, ...props }) => (
    <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-500">
            <Icon />
        </span>
        <input
            {...props}
            className={`w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-rose-500 focus:outline-none transition`}
        />
    </div>
);

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        orderType: 'personalizado',
        deliveryDate: '',
        cakeSize: '',
        flavors: [],
        decoration: '',
        quantity: '1',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className='px-6 py-12 max-w-4xl mx-auto'>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-rose-800 font-playfair">
                Solicitud de Pastel Personalizado
            </h1>

            <form onSubmit={handleSubmit} className="space-y-10">
                {/* Datos Personales */}
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                        <FiUser className="text-rose-600" />
                        Tus Datos
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-gray-700">Nombre completo *</label>
                            <InputIcon icon={FiUser} type="text" name="name" required onChange={handleChange} />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-gray-700">Correo electrónico *</label>
                            <InputIcon icon={FiMail} type="email" name="email" required onChange={handleChange} />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="block text-gray-700">Teléfono *</label>
                            <InputIcon icon={FiPhone} type="tel" name="phone" required onChange={handleChange} />
                        </div>
                    </div>
                </div>

                {/* Detalles del Pedido */}
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                        <FiEdit className="text-rose-600" />
                        Detalles del Pedido
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-gray-700">Tipo de pedido *</label>
                            <select
                                name="orderType"
                                required
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                            >
                                <option value="personalizado">Pastel Personalizado</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-gray-700">Fecha de entrega *</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-500">
                                    <FiCalendar />
                                </span>
                                <input
                                    type="date"
                                    name="deliveryDate"
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    onChange={handleChange}
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 space-y-2">
                        <label className="block text-gray-700">Descripción de la decoración</label>
                        <textarea
                            name="decoration"
                            rows="4"
                            placeholder="Describe tu diseño ideal, colores, temática, etc."
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                        />
                    </div>

                    <div className="mt-6 space-y-2">
                        <label className="block text-gray-700">Información adicional</label>
                        <textarea
                            name="additionalInfo"
                            rows="3"
                            placeholder="Alergias, restricciones dietéticas, etc."
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-rose-600 text-white py-4 rounded-xl hover:bg-rose-700 transition duration-300 text-lg font-bold shadow-md"
                >
                    Enviar Solicitud
                </button>
            </form>

            {/* Contacto al final */}
            <div className="mt-12 text-center text-gray-600 text-base space-y-2">
                <p className="flex justify-center items-center gap-2">
                    <FiPhone className="text-rose-600" /> +505 8817 4854
                </p>
                <p className="flex justify-center items-center gap-2">
                    <FiMail className="text-rose-600" /> pastelerialilliam@gmail.com
                </p>
            </div>
        </section>
    );
};

export default FormContact;
