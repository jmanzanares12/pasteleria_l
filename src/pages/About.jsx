import React from 'react';
import { FiMapPin, FiClock, FiCoffee, FiHeart } from 'react-icons/fi';
import nightMasaya from '../images/nightMasaya.jpeg';
import homeGranada from '../images/homeGranada.jpg';
import homeDiriomo from '../images/homeDiriomo.jpg';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px6 lg:px8 py-20'>
            {/* Hero Section */}
            <section className='mb-16 text-center'>
                <h1 className='text-4xl md:text-5xl font-bold text-rose-800 mb-6 font-[Playfair_Display]'>Nuestra Dulce Historia</h1>
                <div className='max-w-3xl mx-auto'>
                    <p className='text-xl text-gray-800 nb-9 leaading-relaxed'>
                        Desde 1993, en Pastelería Lilliam hemos transformado ingredientes simples en momentos extraordinarios.
                        Cada receta guarda el secreto de tres generaciones de reposteros apasionados.
                    </p>
                    <p className='text-xl text-gray-800 nb-9 leaading-relaxed'>Contamos con el personal capacipado para brindarte 
                        una deliciosa experiencia de repostería, con una variedad de postres de alta calidad y un toque de amor en cada receta.
                        Desde clásicos irresistibles hasta innovaciones dulces, cada bocado es una experiencia inolvidable.
                    </p>
                </div>
                <div className='bg-rose-100 rounded-2xl shadow-inner mt-8 mb-16 flex flex-col items-center justify-center'>
                    <p className='text-lg text-rose-800 italic font-bold'>
                        El dulce sabor en tu paladar.
                    </p>
                </div>
            </section>

            {/* Location */}
            <section className='mb-20'>
                <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center font-[Playfair_Display]'>
                    Encuentranos en nuestras siguientes tiendas...
                </h2>
                {/* Masaya */}
                <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl trasnsition-shadow duration-300'>
                    <div className='flex items-center gap-4 mb-2 mt-2 space-x-8'>
                        <div>
                            <img src={nightMasaya} alt='masaya' className='h[50vh] w-180 object-cover rounded-2xl' />
                        </div>

                        <div>
                            <div className='bg-rose-100 w-fit p-4 rounded-2xl mb-4'>
                                <FiMapPin className='h-8 w-8 text-rose-600' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-2'>Masaya</h3>
                            <p className='text-gray-700 mb-4'>
                                Mercado Ernesto Fernández <br />
                                <span className='text-sm text-rose-600 bg-rose-100 px-2 py-1 rounded-full mt-2 inline-block'>¡Nuestra sede principal!</span> <br />
                                Mercado de Artesanias <br />
                                Frente a Museo Camilo Ortega
                            </p>
                            <div className='flex items-center text-gray-700 gap-2'>
                                <FiClock className='text-rose-600 h-6 w-6' />
                                <span>Horario de atención: Lunes a Domingos de 6:00 am a 5:00 pm</span>
                            </div>
                            <div className='flex items-center text-gray-700 gap-2 mt-2'>
                                <FiClock className='text-rose-600 h-6 w-6' />
                                <span>Miercoles: Cerrado</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Granada */}
                <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl trasnsition-shadow duration-300 mt-8'>
                    <div className='flex items-center gap-4 mb-2 mt-2 space-x-8'>
                        <div>
                            <img src={homeGranada} alt='granada' className='h[50vh] w-180 object-cover rounded-2xl' />
                        </div>

                        <div>
                            <div className='bg-rose-100 w-fit p-4 rounded-2xl mb-4'>
                                <FiMapPin className='h-8 w-8 text-rose-600' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-2'>Granada</h3>
                            <p className='text-gray-700 mb-4'>
                                Calle Atravesada, Frente a Financiera Fama<br />
                            </p>
                            <div className='flex items-center text-gray-700 gap-2'>
                                <FiClock className='text-rose-600 h-6 w-6' />
                                <span>Horario de atención: Lunes a Sabados de 8:00 am a 5:00 pm </span>

                            </div>
                            <div className='flex items-center text-gray-700 gap-2 mt-2'>
                                <FiClock className='text-rose-600 h-6 w-6' />
                                <span>Jueves: Cerrado</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Diriomo */}
                <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl trasnsition-shadow duration-300 mt-8'>
                    <div className='flex items-center gap-4 mb-2 mt-2 space-x-8'>
                        <div>
                            <img src={homeDiriomo} alt='diriomo' className='h[50vh] w-180 object-cover rounded-2xl' />
                        </div>

                        <div>
                            <div className='bg-rose-100 w-fit p-4 rounded-2xl mb-4'>
                                <FiMapPin className='h-8 w-8 text-rose-600' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-2'>Diriomo</h3>
                            <p className='text-gray-700 mb-4'>
                                Calle Comercial, Contiguo al Pali-Diriomo<br />
                            </p>
                            <div className='flex items-center text-gray-700 gap-2'>
                                <FiClock className='text-rose-600 h-6 w-6' />
                                <span>Horario de atención: Lunes a Sabados de 8:00 am a 5:00 pm </span>

                            </div>
                            <div className='flex items-center text-gray-700 gap-2 mt-2'>
                                <FiClock className='text-rose-600 h-6 w-6' />
                                <span>Miercoles: Cerrado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section>

            </section>
        </div>
    )
};

export default About;