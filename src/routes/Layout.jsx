import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="pt-20 flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}