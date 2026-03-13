import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiInfo, FiArrowRight } from 'react-icons/fi';
import { dataProducts as productData } from '../data/dataProducts';
import { Link } from 'react-router-dom';

const categories = Object.keys(productData);

const Products = () => {
    const [activeTab, setActiveTab] = useState(categories[0] || "Pasteles");

    return (
        <main className="bg-[var(--color-bg)] min-h-screen pb-32">
            <header className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-primary)]/5 -skew-y-3 origin-left scale-110" />
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-[var(--color-primary)] font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">
                            Catálogo Artesanal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text)] mb-6 tracking-tighter">
                            Nuestro <span className="text-[var(--color-accent)] italic font-serif text-6xl md:text-8xl">Menú</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-[var(--color-muted)] font-light text-base md:text-lg italic leading-relaxed">
                            "Seleccionamos los ingredientes más frescos para crear momentos inolvidables en tu mesa."
                        </p>
                    </motion.div>
                </div>
            </header>

            <nav className="sticky top-20 z-30 bg-[var(--color-bg)]/80 backdrop-blur-md py-6 mb-8 md:mb-12 border-y border-[var(--color-primary)]/5">
                <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto gap-3 pb-2 snap-x md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`relative px-6 md:px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden whitespace-nowrap snap-center shrink-0 ${activeTab === cat
                                    ? "text-white"
                                    : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                                }`}
                        >
                            <span className="relative z-10">{cat}</span>
                            {activeTab === cat && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/30"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </nav>

            <section className="max-w-7xl mx-auto px-6">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {productData[activeTab]?.map((prod, index) => (
                            <motion.div
                                key={prod.name + activeTab}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-gray-200 flex flex-col justify-between hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--color-primary)]/5 transition-colors pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        {prod.tag ? (
                                            <span className="text-[9px] bg-[var(--color-accent)] text-white px-3 py-1 rounded-full font-black uppercase tracking-widest shadow-sm">
                                                {prod.tag}
                                            </span>
                                        ) : <div />}
                                        <FiArrowRight className="text-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)] transition-colors transform group-hover:translate-x-2" />
                                    </div>

                                    <img src={prod.image} alt={prod.name} className="w-full h-48 md:h-auto object-cover mb-6 rounded-2xl shadow-sm" />

                                    <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                        {prod.name}
                                    </h3>

                                    <p className="text-[var(--color-muted)] text-[13px] leading-relaxed mb-6 md:mb-8 opacity-80 font-normal">
                                        {prod.desc}
                                    </p>

                                    {(prod.specs || prod.fillings) && (
                                        <div className="space-y-3 mb-6 md:mb-8">
                                            {prod.specs && (
                                                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-primary)]/5">
                                                    <div className="p-2 rounded-xl bg-white text-[var(--color-primary)] shadow-sm shrink-0">
                                                        <FiShoppingBag className="text-sm" />
                                                    </div>
                                                    <span className="text-[11px] font-bold text-[var(--color-text)] uppercase tracking-tighter opacity-70 italic">{prod.specs}</span>
                                                </div>
                                            )}
                                            {prod.fillings && (
                                                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--color-primary)]/[0.03] border border-[var(--color-primary)]/5">
                                                    <div className="p-2 rounded-xl bg-white text-[var(--color-accent)] shadow-sm shrink-0">
                                                        <FiInfo className="text-sm" />
                                                    </div>
                                                    <span className="text-[11px] font-bold text-[var(--color-text)] uppercase tracking-tighter opacity-70 italic">{prod.fillings}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {prod.note && (
                                    <div className="relative z-10 mt-auto pt-5 border-t border-[var(--color-primary)]/5">
                                        <p className="text-[10px] text-[var(--color-accent)] font-black uppercase italic flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse mt-1 shrink-0" />
                                            <span>Nota: {prod.note}</span>
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            <section className="max-w-5xl mx-auto px-6 mt-20 md:mt-32">
                <div className="relative overflow-hidden bg-[var(--color-primary)] rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 text-center">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tighter">
                            ¿Tienes una idea especial?
                        </h3>
                        <p className="text-white/80 max-w-2xl mx-auto font-light text-sm md:text-lg italic mb-8 md:mb-12 leading-relaxed">
                            Cualquier tamaño mayor a 1lb o diseños exclusivos se trabajan bajo pedido personalizado. Cuéntanos tu sueño y lo hornearemos para ti.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center gap-3 bg-[var(--color-accent)]/90 md:bg-[var(--color-accent)]/70 text-white px-6 md:px-10 py-4 md:py-5 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-[var(--color-primary)] transition-all duration-500 shadow-xl w-full md:w-auto"
                        >
                            Crear mi pedido personalizado <FiArrowRight className="shrink-0" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;