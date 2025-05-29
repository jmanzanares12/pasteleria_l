import React from "react";
import AppRoutes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return(
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App