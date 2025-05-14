import React from "react";
import Providers from "./Providers";
import AppRoutes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return(
    <Providers>
      <Header />
      <main className="min-h-screen mx-auto px-4 sm:px6 lg:px-8 py-12">
        <AppRoutes />
      </main>
      <Footer />
    </Providers>
  )
}

export default App