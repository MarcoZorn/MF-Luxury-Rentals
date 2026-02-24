import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import BookingModal from '../cars/BookingModal';

import logoLungo from '../../assets/images/branding/logo_lungo.png';

interface HeroProps {
    poster: string;
}

const Hero: React.FC<HeroProps> = ({ poster }) => {
    const { t } = useLanguage();
    const [showBookingModal, setShowBookingModal] = useState(false);

    const scrollToFleet = () => {
        const fleetSection = document.getElementById('parco-auto');
        if (fleetSection) {
            fleetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-luxury-black" aria-label="Hero Section">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-luxury-black z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={poster}
                    className="w-full h-full object-cover scale-110 opacity-60"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-driving-through-the-city-at-night-4546/1080p.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Horizontal logo as requested */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-full flex justify-center mb-10"
                    >
                        <img
                            src={logoLungo}
                            alt="MF Luxury Rentals"
                            className="h-20 md:h-24 object-contain"
                        />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30 rounded-full"
                    >
                        MF ITALY LUXURY RENT
                    </motion.span>

                    <h1 className="text-4xl md:text-6xl lg:text-[70px] leading-[1.1] mb-8 font-black tracking-tighter uppercase whitespace-pre-line">
                        {t('hero.title1')}{"\n"}
                        <span className="text-luxury-gold text-glow">{t('hero.title2')}</span>
                    </h1>

                    <p className="text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => setShowBookingModal(true)}
                            className="group relative px-10 py-5 bg-luxury-gold text-black font-black tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center">
                                <Calendar className="mr-3 w-5 h-5" />
                                {t('hero.ctaRequest')}
                            </span>
                        </button>

                        <button
                            onClick={scrollToFleet}
                            className="group px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black tracking-widest text-sm rounded-full border border-white/20 transition-all flex items-center hover:border-luxury-gold/50"
                        >
                            {t('hero.ctaFleet')}
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-luxury-gold"
                onClick={scrollToFleet}
            >
                <div className="w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1.5 h-1.5 bg-luxury-gold rounded-full"
                    />
                </div>
            </motion.div>

            <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
        </section>
    );
};

export default Hero;
