import React, { useState } from 'react';
import {  FiMail, FiUser, FiPhone } from 'react-icons/fi';

const Contact = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar el formulario
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFlavorChange = (e) => {
        const flavor = e.target.value;
        setFormData(prev => ({
            ...prev,
            flavors: e.target.checked
                ? [...prev.flavors, flavor]
                : prev.flavors.filter(f => f !== flavor)
        }));
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-800 mb-8 text-center font-playfair">
                Solicitud de Pedido Especial
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Información Personal */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FiUser className="text-rose-600" />
                        Tus Datos
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-gray-700">Nombre completo *</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-gray-700">Correo electrónico *</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-gray-700">Teléfono *</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Tipo de Pedido */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        
                        Detalles del Pedido
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="block text-gray-700">Tipo de pedido *</label>
                            <select
                                name="orderType"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                                onChange={handleChange}
                            >
                                <option value="personalizado">Pastel Personalizado</option>
                                <option value="mayor">Pedido al por Mayor</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-gray-700">Fecha de entrega *</label>
                            <input
                                type="date"
                                name="deliveryDate"
                                required
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                                onChange={handleChange}
                            />
                        </div>

                        {formData.orderType === 'mayor' && (
                            <div className="space-y-2">
                                <label className="block text-gray-700">Cantidad aproximada</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    min="10"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                                    onChange={handleChange}
                                    placeholder="Mínimo 10 unidades"
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="block text-gray-700">Tamaño del pastel</label>
                            <select
                                name="cakeSize"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                                onChange={handleChange}
                            >
                                <option value="">Seleccione tamaño</option>
                                <option value="pequeno">Pequeño (8-10 porciones)</option>
                                <option value="mediano">Mediano (12-15 porciones)</option>
                                <option value="grande">Grande (20+ porciones)</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <label className="block text-gray-700">Sabores (selección múltiple)</label>
                        <div className="grid md:grid-cols-3 gap-4">
                            {['Chocolate', 'Vainilla', 'Fresa', 'Limon', 'Zanahoria', 'Tres Leches'].map(flavor => (
                                <label key={flavor} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        value={flavor}
                                        checked={formData.flavors.includes(flavor)}
                                        onChange={handleFlavorChange}
                                        className="text-rose-600 focus:ring-rose-500"
                                    />
                                    <span className="text-gray-700">{flavor}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 space-y-2">
                        <label className="block text-gray-700">Descripción de la decoración</label>
                        <textarea
                            name="decoration"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                            placeholder="Describe tu diseño ideal, colores, temática, etc."
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-6 space-y-2">
                        <label className="block text-gray-700">Información adicional</label>
                        <textarea
                            name="additionalInfo"
                            rows="3"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                            placeholder="Alergias, restricciones dietéticas, etc."
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-rose-600 text-white py-4 rounded-xl hover:bg-rose-700 transition-colors duration-300 text-xl font-semibold"
                >
                    Enviar Solicitud
                </button>
            </form>

            <div className="mt-12 text-center text-gray-600">
                <p className="flex items-center justify-center gap-2">
                    <FiPhone className="text-rose-600" />
                    ¿Necesitas ayuda? Llámanos al +505 8817 4854
                </p>
                <p className="mt-2 flex items-center justify-center gap-2">
                    <FiMail className="text-rose-600" />
                    pastelerialilliam@gmail.com
                </p>
            </div>
        </div>
    );
};

export default Contact;