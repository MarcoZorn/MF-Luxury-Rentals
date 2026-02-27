import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import logoMain from '../../assets/images/branding/logo_main.png';

interface NavLinkData {
    name: string;
    path: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: NavLinkData[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
    const { t } = useLanguage();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 bg-luxury-black z-[100] flex flex-col justify-center items-center"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile Navigation Menu"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-white p-2 hover:text-luxury-gold transition-colors"
                        aria-label="Close Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    {/* Logo icon */}
                    <div className="absolute top-6 left-6 scale-90 origin-top-left opacity-90">
                        <img src={logoMain} alt="MF" className="h-8 object-contain" />
                    </div>

                    <div className="flex flex-col space-y-6 text-center">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                                <Link
                                    to={link.path}
                                    className="text-4xl font-display font-bold text-white hover:text-luxury-gold transition-colors tracking-tight uppercase"
                                    onClick={onClose}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="pt-12"
                        >
                            <Link to="/contact" onClick={onClose}>
                                <button className="bg-luxury-gold text-black font-bold py-5 px-10 rounded-full text-sm tracking-[0.2em] shadow-[0_20px_40px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform uppercase">
                                    {t('hero.ctaRequest')}
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
