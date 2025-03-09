import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";

import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";

import { Home } from "./pages/Home";
import { Indicators } from "./pages/Indicators";

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/indicators" element={<Indicators />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}