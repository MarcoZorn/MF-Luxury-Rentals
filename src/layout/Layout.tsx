import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieBanner from '../components/ui/CookieBanner';
import BookingModal from '../components/cars/BookingModal';

const Layout: React.FC = () => {
    const [bookingState, setBookingState] = useState<{ isOpen: boolean; carName?: string }>({
        isOpen: false
    });

    useEffect(() => {
        const handleOpenBooking = (e: any) => {
            const carId = e.detail?.carId;
            // You could look up the car name here if needed, or pass it in detail
            setBookingState({
                isOpen: true,
                carName: carId === 'bugatti-chiron' ? 'Bugatti Chiron' : undefined
            });
        };

        window.addEventListener('openBooking', handleOpenBooking as EventListener);
        return () => window.removeEventListener('openBooking', handleOpenBooking as EventListener);
    }, []);

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

            <BookingModal
                isOpen={bookingState.isOpen}
                onClose={() => setBookingState({ isOpen: false })}
                carName={bookingState.carName}
            />
        </div>
    );
};

export default Layout;
