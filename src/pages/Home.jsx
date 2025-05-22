import Hero from '../shared/Hero';
import Values from '../shared/Values';
import LocationsCards from '../shared/LocationsCards';
import CTASection from '../shared/CTASection';


const Home = () => {
    return(
        <>
            <Hero />
            <div className='px-4 sm:px6 lg:px-8 py-12'>
                <Values />
                <LocationsCards />
                <CTASection
                    title='¿Te apatece un poco de dulce?'
                    description='Visita nuestra tienda o explora nuestro catálogo en línea para descubrir nuestras creaciones más deliciosas.'
                    buttonText='Ver Sobre Nosotros'
                    redirectTo='/about'
                />
            </div>
        </>
    )
};

export default Home;