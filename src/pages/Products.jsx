import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiInfo } from 'react-icons/fi';
import { dataProducts as productData } from '../data/dataProducts';
import { Link } from 'react-router-dom';

const categories = Object.keys(productData);

const Products = () => {
    const [activeTab, setActiveTab] = useState(categories[0] || "Pasteles");
    return (
        <main className="pt-4 bg-[var(--color-bg)] min-h-screen pb-20">
            <section className="max-w-7xl mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">Nuestro Menú</h1>
                <p className="text-[var(--color-muted)] font-light italic">Horneamos cada detalle para tu paladar</p>
                
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                                activeTab === cat 
                                ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20" 
                                : "bg-white text-[var(--color-muted)] border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/40"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='wait'>
                        {productData[activeTab] && productData[activeTab].map((prod, index) => (
                            <motion.div
                                key={prod.name + activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white p-8 rounded-[2.5rem] border border-[var(--color-primary)]/5 shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    {prod.tag && (
                                        <span className="text-[10px] bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-1 rounded-full font-bold uppercase tracking-tighter mb-4 inline-block">
                                            {prod.tag}
                                        </span>
                                    )}
                                    <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">{prod.name}</h3>
                                    <p className="text-[var(--color-muted)] text-sm font-light mb-6 leading-relaxed">
                                        {prod.desc}
                                    </p>
                                    
                                    {(prod.specs || prod.fillings) && (
                                        <div className="bg-[var(--color-surface)] p-4 rounded-2xl space-y-2 mb-6 border border-[var(--color-primary)]/5">
                                            {prod.specs && <p className="text-xs text-[var(--color-text)] font-medium flex items-center gap-2 text-[var(--color-text-dark)]"><FiShoppingBag className="text-[var(--color-primary)]"/> {prod.specs}</p>}
                                            {prod.fillings && <p className="text-xs text-[var(--color-text)] font-medium flex items-center gap-2 text-[var(--color-text-dark)]"><FiInfo className="text-[var(--color-primary)]"/> {prod.fillings}</p>}
                                        </div>
                                    )}
                                </div>

                                {prod.note && (
                                    <p className="text-[10px] text-[var(--color-accent)] font-bold uppercase italic mt-4">
                                        * {prod.note}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-6 mt-16">
                <div className="bg-[var(--color-primary)] text-white p-10 rounded-[3rem] text-center shadow-2xl shadow-[var(--color-primary)]/20">
                    <h3 className="text-2xl font-bold mb-4">¿Buscas algo más específico?</h3>
                    <p className="text-white/80 font-light mb-8 italic">Cualquier tamaño mayor a 1lb o diseños especiales se trabajan bajo pedido personalizado.</p>
                    <Link
                        to="/contact"
                        className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/90 transition-all shadow-lg shadow-[var(--color-primary)]/20"
                        aria-label="Contactar para pedido personalizado"
                    >
                        Contactar para Pedido Personalizado
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Products;