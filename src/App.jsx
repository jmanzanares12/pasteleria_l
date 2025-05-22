import React from "react";
import Providers from "./providers";
import AppRoutes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return(
    <Providers>
      <Header />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </Providers>
  )
}

export default App