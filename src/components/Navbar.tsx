import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import NavLink from './navbar/NavLink';
import MobileMenu from './navbar/MobileMenu';
import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../types/i18n';
import logoMain from '../assets/images/branding/logo_main.png';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const location = useLocation();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsLangOpen(false);
    }, [location]);

    const languages: { code: Language; label: string }[] = [
        { code: 'IT', label: 'Italiano' },
        { code: 'EN', label: 'English' },
        { code: 'AR', label: 'العربية' },
        { code: 'FR', label: 'Français' },
        { code: 'RU', label: 'Русский' },
        { code: 'ES', label: 'Español' },
    ];

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.fleet'), path: '/fleet' },
        { name: t('nav.locations'), path: '/locations' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-luxury-black/95 backdrop-blur-md py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-luxury-gold/20'
                    : 'bg-transparent py-4'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group" aria-label="MF Luxury Rentals Home">
                        <img
                            src={logoMain}
                            alt="MF Luxury Rent"
                            className={`transition-all duration-500 object-contain ${isScrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-14'
                                } group-hover:scale-105`}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} to={link.path}>
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Actions Area */}
                    <div className="flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center space-x-2 bg-white/5 border border-white/10 hover:border-luxury-gold/50 rounded-full px-3 py-1.5 transition-all text-xs font-bold tracking-widest text-white/80 hover:text-white"
                            >
                                <Globe size={14} className="text-luxury-gold" />
                                <span>{language}</span>
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 mt-2 w-48 bg-luxury-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-[60]"
                                    >
                                        <div className="py-2">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => {
                                                        setLanguage(lang.code);
                                                        setIsLangOpen(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-2 text-xs font-medium tracking-wide transition-colors ${language === lang.code
                                                        ? 'bg-luxury-gold text-black'
                                                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                                                        }`}
                                                >
                                                    {lang.label}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Phone - visible on lg+ */}
                        <a href="tel:+393206144070" className="hidden lg:flex items-center text-white/90 hover:text-luxury-gold transition-colors group">
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxury-gold mr-3 transition-colors">
                                <Phone size={16} />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-0.5">Contact Us</p>
                                <p className="text-sm font-bold tracking-wider">+39 3206144070</p>
                            </div>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="xl:hidden text-white z-50 focus:outline-none p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navLinks={navLinks}
            />
        </>
    );
};

export default Navbar;
