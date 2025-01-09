import React from "react";
import '../styles/aboutusApp.css'

function AboutUsApp() {
    return (
        <>
            <section className="sectionApp">
                <div className="aboutUs">
                    <h3>Sobre Nosotros</h3>
                    <p><strong>Panaderia Lilliam</strong> es más que una panadería; somos parte de la comunidad de <strong>Masaya</strong> desde hace más de 30 años. Hemos crecido junto a nuestros clientes, celebrando sus momentos especiales con nuestros panes, pasteles y postres. Nuestro compromiso es seguir ofreciendo productos frescos y deliciosos, elaborados con el mismo cariño que nos ha caracterizado durante estas tres décadas.
                    </p>
                </div>
                <div className="container">
                    <div className="mission">
                        <h3>Mision</h3>
                        <p>Ser un punto de encuentro para la comunidad, ofreciendo productos horneados frescos y deliciosos, elaborados con ingredientes de primera calidad y el cariño que nos ha caracterizado durante más de 30 años. Buscamos endulzar los momentos cotidianos y las celebraciones especiales de nuestros clientes, fortaleciendo los lazos que nos unen a nuestra comunidad.</p>
                    </div>
                    <div className="vission">
                        <h3>Vision</h3>
                        <p>Ser una empresa líder en el sector de la panadería y pastelería a nivel Nacional, manteniendo nuestro compromiso con la calidad, la tradición y el servicio excepcional a la comunidad que nos vio nacer.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsApp