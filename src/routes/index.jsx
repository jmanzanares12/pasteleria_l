import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

const HomeView = React.lazy(() => import('../views/HomeView'));
const AboutView = React.lazy(() => import('../views/AboutView'));
const ProductsView = React.lazy(() => import('../views/ProductsView'));
const ContactView = React.lazy(() => import('../views/ContactView'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <HomeView />
                    </React.Suspense>
                }
            />
            <Route 
                path="/about"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <AboutView />
                    </React.Suspense>
                }
            />
            <Route
                path="/products"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <ProductsView />
                    </React.Suspense>
                }
            />
            <Route
                path="/contact"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <ContactView />
                    </React.Suspense>
                }
            />
            {
                <Route path="*" element={<Navigate to="/" replace />} />
            }
        </Routes>
    )
}

export default AppRoutes;