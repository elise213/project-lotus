import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Contact } from "./pages/Contact";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/Footer";


const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = import.meta.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            <Navbar />
            <ScrollToTop>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Portfolio />} path="/portfolio" />
                    <Route element={<Contact />} path="/contact" />
                </Routes>
            </ScrollToTop>
            <Footer />
        </BrowserRouter>

    );
};

export default injectContext(Layout);
