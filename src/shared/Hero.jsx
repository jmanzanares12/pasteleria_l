import { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import masaya from '../assets/images/masaya.avif';

const Hero = () => {
    const sliderRef = useRef(null);

    const sliderSettings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    return (
        <main className='pb-14'>
            <section className='relative py-16 bg-white overflow-hidden'>
                <div className='absolute inset-0 opacity-80'>
                    <img src={masaya} alt="Masaya" />

                </div>
            </section>
        </main>
    );
};

export default Hero;