import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';
import Layout from './layout';

const HomeView = React.lazy(() => import('../views/HomeView'));
const AboutUsView = React.lazy(() => import('../views/AboutUsView'));
const ProductsView = React.lazy(() => import('../views/ProductsView'));
const ContactView = React.lazy(() => import('../views/ContactView'));

function NotFound() {
    return (
        <div className='max-w-7xl bg-[var(--color-bg)] mx-auto px-6 py-20 text-center space-y-6'>
            <h1 className='text-6xl font-bold text-[var(--color-primary)]'>404</h1>
            <p className='text-xl text-[var(--color-muted)]'>Página no encontrada</p>
            <button
                onClick={() => window.history.back()}
                className='px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors'
            >
                Volver
            </button>
        </div>
    )
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />} >
                <Route path='/' element={
                    <React.Suspense fallback={<Loading />}>
                        <HomeView />
                    </React.Suspense>
                }/>
                <Route path="/about-us" element={
                    <React.Suspense fallback={<Loading />}>
                        <AboutUsView />
                    </React.Suspense>
                }/>
                <Route path="/products" element={
                    <React.Suspense fallback={<Loading />}>
                        <ProductsView />
                    </React.Suspense>
                }/>
                <Route path="/contact" element={
                    <React.Suspense fallback={<Loading />}>
                        <ContactView />
                    </React.Suspense>
                }/>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;