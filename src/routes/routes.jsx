import React from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";

export const routes = [
    {path: '/pasteleria_l', element: <Home />, name: 'Home'},
    {path: '/about', element: <About />, name: 'About'},
    {path: '/products', element: <Products />, name: 'Products'},
    {path: '/contact', element: <Contact />, name: 'Contact'},
];