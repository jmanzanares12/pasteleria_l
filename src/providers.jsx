import React from "react";
import { BrowserRouter } from "react-router-dom";

const Providers = ({ children }) => {
    return (
        <BrowserRouter>
            <main>{children}</main>
        </BrowserRouter>
    );
};

export default Providers;