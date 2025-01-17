import React from "react";
import '../styles/aboutusApp.css';
import SliderApp from "./sliderApp";

function AboutUsApp() {
    return (
        <>
        <section className="sectionApp">
            <div className="imageApp">
                <h3>Conócenos</h3>
                <SliderApp />
            </div>

            <div className="aboutUs">
                <h3>Sobre Nosotros</h3>
                <p>
                    <strong>Panadería Lilliam</strong> es más que una panadería; somos parte de la comunidad de
                    <strong> Masaya</strong> desde hace más de 30 años. Hemos crecido junto a nuestros clientes,
                    celebrando sus momentos especiales con nuestros panes, pasteles y postres. Hoy, nuestro compromiso
                    de ofrecer productos frescos y deliciosos nos ha llevado a expandirnos y estar más cerca de ustedes
                    con sucursales también en Granada y Diriomo. Cada uno de nuestros locales mantiene el mismo cariño y
                    dedicación que nos ha caracterizado durante estas tres décadas.
                </p>
            </div>

            <div className="container">
                <div className="mission">
                    <h3>Misión</h3>
                    <p>
                        En Panadería Lilliam queremos ser ese lugar especial donde la comunidad se reúne y disfruta de
                        momentos únicos. Ofrecemos productos horneados frescos, deliciosos y hechos con ingredientes de
                        primera calidad, pero, sobre todo, con mucho cariño. Desde los días más simples hasta las
                        celebraciones más grandes, estamos aquí para endulzar cada momento y fortalecer los lazos que
                        nos unen como familia.
                    </p>
                </div>
                <div className="vission">
                    <h3>Visión</h3>
                    <p>
                        Queremos ser líderes en panadería y pastelería en todo el país, llevando el sabor y la tradición
                        que nos define a cada rincón de Nicaragua. Nuestro compromiso es mantenernos fieles a la calidad
                        y al servicio excepcional que siempre hemos brindado, honrando a la comunidad que nos vio nacer
                        y creciendo juntos hacia un futuro lleno de momentos deliciosos.
                    </p>
                </div>
            </div>
        </section>
    </>
    );
}

export default AboutUsApp