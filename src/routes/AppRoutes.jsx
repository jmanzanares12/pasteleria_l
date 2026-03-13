import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';
import Layout from './layout';

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiCake3Line } from "react-icons/ri";

const HomeView = React.lazy(() => import('../views/HomeView'));
const AboutUsView = React.lazy(() => import('../views/AboutUsView'));
const ProductsView = React.lazy(() => import('../views/ProductsView'));
const ContactView = React.lazy(() => import('../views/ContactView'));

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full text-center space-y-8"
            >
                <motion.div
                    animate={{
                        rotate: [0, -10, 10, -10, 0],
                        y: [0, -5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        <RiCake3Line className="text-9xl text-[var(--color-primary)] opacity-20" />
                        <span className="absolute inset-0 flex items-center justify-center text-6xl font-black text-[var(--color-primary)] tracking-tighter">
                            404
                        </span>
                    </div>
                </motion.div>

                <div className="space-y-3">
                    <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
                        ¿Te perdiste en el horno?
                    </h1>
                    <p className="text-gray-500 font-medium">
                        Parece que esta página no terminó de hornearse o nunca existió. ¡No te preocupes, el postre está en otro lado!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-8 py-4 border-2 border-gray-100 text-gray-600 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-gray-50 transition-all active:scale-95"
                    >
                        Regresar
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-2xl font-bold uppercase text-xs tracking-widest shadow-lg shadow-[var(--color-primary)]/20 hover:brightness-110 transition-all active:scale-95"
                    >
                        Ir al Inicio
                    </button>
                </div>

                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-bold pt-8">
                    Pastelería Lilliam · Masaya
                </p>
            </motion.div>
        </div>
    );
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />} >
                <Route path='/' element={
                    <React.Suspense fallback={<Loading />}>
                        <HomeView />
                    </React.Suspense>
                } />
                <Route path="/about-us" element={
                    <React.Suspense fallback={<Loading />}>
                        <AboutUsView />
                    </React.Suspense>
                } />
                <Route path="/products" element={
                    <React.Suspense fallback={<Loading />}>
                        <ProductsView />
                    </React.Suspense>
                } />
                <Route path="/contact" element={
                    <React.Suspense fallback={<Loading />}>
                        <ContactView />
                    </React.Suspense>
                } />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;