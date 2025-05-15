import Hero from '../shared/Hero';
import Values from '../shared/Values';
import CTASection from '../shared/CTASection';


const Home = () => {
    return(
        <div className='min-h-screen mx-auto px-4 sm:px6 lg:px-8 py-12'>
            <Hero />
            <Values />
            <CTASection
                title='¿Quieres conocer más sobre nosotros?'
                description='Visita nuestra tienda o explora nuestro catálogo en línea para descubrir nuestras creaciones más deliciosas.'
                buttonText='Ver Sobre Nosotros'
                redirectTo='/about'
            />
        </div>
    )
};

export default Home;