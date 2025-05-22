import { useRef } from 'react';
import { motion } from 'framer-motion';
import { sliderImages } from '../data/data.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Hero = () => {
    const sliderRef = useRef(null);

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };

    return (
        <div className='w-full'>
            {/* Slider */}
            <section className='relative w-full h-screen overflow-hidden'>
                <Slider 
                    ref={sliderRef} 
                    {...sliderSettings}
                    accessibility={false}
                    focusOnSelect={false}
                >
                    {sliderImages.map((images) => (
                        <div key={images.id} className='relative w-full h-screen'>
                            <img
                                src={images.image}
                                alt={images.alt}
                                className='w-full h-full object-cover'
                                loading='lazy'
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent z-10' />
                            <div className='absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-32 text-white'>
                                <motion.h1
                                    initial={{ opacity: 0, y: -40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className='text-4xl md:text-5xl mb-4 text-left'
                                >
                                    Bienvenidos a Pastelería Lilliam
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className='text-lg md:text-2xl max-w-3xl leading-relaxed drop-shadow-md'
                                >
                                    Con más de 30 años de experiencia endulzando los momentos más especiales, en Pastelería Lilliam
                                    convertimos cada creación en una obra de arte. Nuestra tradición familiar, combinada con técnicas
                                    modernas, nos permite ofrecer postres exquisitos, elaborados con ingredientes de la más alta
                                    calidad y un toque de amor en cada receta.
                                </motion.p>
                            </div>
                            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30  px-6 py-3 rounded-xl text-white text-center max-w-[90%]'>
                                <p className='text-lg md:text-xl font-medium'>
                                    {images.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default Hero;