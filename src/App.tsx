import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";

import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";

import { Home } from "./pages/Home";

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}