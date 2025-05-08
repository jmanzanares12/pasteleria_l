import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Products = React.lazy(() => import('../pages/Products'));
const Contact = React.lazy(() => import('../pages/Contact'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Home />
                    </React.Suspense>
                }
            />
            <Route
                path="/about"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <About />
                    </React.Suspense>
                }
            />
            <Route
                path="/products"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Products />
                    </React.Suspense>
                }
            />
            <Route
                path="/contact"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Contact />
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