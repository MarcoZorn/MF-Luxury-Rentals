import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import CookieBanner from '../components/ui/CookieBanner';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-luxury-black text-white">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-luxury-gold focus:text-black focus:px-4 focus:py-2 focus:font-bold focus:rounded-b-lg focus:left-1/2 focus:-translate-x-1/2 transition-all"
            >
                Skip to Content
            </a>
            <Navbar />
            <main id="main-content" className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <CookieBanner />
        </div>
    );
};

export default Layout;
