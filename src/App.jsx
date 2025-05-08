import React from "react";
import Providers from "./Providers";
import AppRoutes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return(
    <Providers>
      <Header />
      <main className="max-w-screen-lg w-full px-4 mx-auto py-8 flex-1 bg-white">
        <AppRoutes />
      </main>
      <Footer />
    </Providers>
  )
}

export default App