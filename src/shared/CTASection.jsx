// src/components/shared/CTASection.jsx
import { useNavigate } from 'react-router-dom';

const CTASection = ({ title, description, buttonText, redirectTo }) => {
    const navigate = useNavigate();

    return (
        <section className='py-14 text-center bg-gradient-to-r from-rose-50 to-rose-100 rounded-2xl shadow-inner'>
            <div className='max-w-2xl mx-auto px-6'>
                <h2 className='text-4xl font-bold text-gray-800 mb-6 font-[Playfair_Display]'>
                    🎂 <span className='text-rose-600'>{title}</span>
                </h2>
                <p className='text-xl text-gray-700 mb-8'>{description}</p>
                <button
                    className='bg-rose-600 text-white px-10 py-4 rounded-xl hover:bg-rose-700 hover:scale-105 transition-all duration-300 text-lg font-semibold shadow-lg flex items-center gap-2 mx-auto'
                    onClick={() => navigate(redirectTo)}
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default CTASection;
