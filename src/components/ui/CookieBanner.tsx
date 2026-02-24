import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { useLanguage } from '../../hooks/useLanguage';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const consent = localStorage.getItem('mf-cookie-consent');
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('mf-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('mf-cookie-consent', 'rejected');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
                >
                    <div className="bg-luxury-black/95 backdrop-blur-xl border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] rounded-3xl max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-8">
                        <div className="text-gray-300 text-sm font-light leading-relaxed max-w-3xl tracking-wide text-left">
                            <p className="font-medium text-white mb-2 uppercase tracking-[0.2em] text-[10px] text-luxury-gold">
                                {t('cookies.title')}
                            </p>
                            <p>
                                {t('cookies.message')}
                            </p>
                        </div>
                        <div className="flex items-center gap-6 min-w-max">
                            <button
                                onClick={handleReject}
                                className="text-white hover:text-luxury-gold text-xs font-bold uppercase tracking-[0.2em] transition-colors py-3 px-8 border border-white/10 rounded-full hover:border-luxury-gold/50"
                            >
                                {t('cookies.reject')}
                            </button>
                            <Button
                                onClick={handleAccept}
                                variant="primary"
                                className="text-xs font-bold tracking-[0.2em] py-3 px-10 shadow-luxury-gold/20"
                            >
                                {t('cookies.accept')}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
