import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarModel3DProps {
    modelUrl: string;
    name: string;
    fallbackImage: string;
}

const CarModel3D: React.FC<CarModel3DProps> = ({ modelUrl, name, fallbackImage }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for Autoload
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Timeout Fallback (5 seconds)
    useEffect(() => {
        if (isVisible && isLoading) {
            const timer = setTimeout(() => {
                if (isLoading) {
                    setHasError(true);
                }
            }, 8000); // 8 seconds to be safe given 3D loading times
            return () => clearTimeout(timer);
        }
    }, [isVisible, isLoading]);

    return (
        <div className="mb-12" ref={containerRef}>
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center">
                <div className="w-8 h-[1px] bg-luxury-gold mr-3"></div>
                VISUALIZZAZIONE 3D
            </h3>

            <div className="w-full aspect-video bg-[#0A0A0A] rounded border border-white/10 overflow-hidden relative group">
                <AnimatePresence mode="wait">
                    {!isVisible ? (
                        /* Placeholder while waiting for scroll */
                        <motion.div
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-luxury-black"
                        >
                            <div className="w-8 h-8 border-2 border-luxury-gold/30 border-t-luxury-gold rounded-full" />
                        </motion.div>
                    ) : hasError ? (
                        /* Fallback Image on Error/Timeout */
                        <motion.img
                            key="fallback"
                            src={fallbackImage}
                            alt={`${name} 3D Fallback`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        /* 3D Iframe */
                        <motion.div
                            key="model"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full h-full"
                        >
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                    <div className="w-12 h-12 border-2 border-luxury-gold/30 border-t-luxury-gold rounded-full animate-spin" />
                                </div>
                            )}
                            <div className="relative w-full h-full">
                                <iframe
                                    title={name}
                                    className="w-full h-full relative z-20"
                                    allowFullScreen
                                    allow="autoplay; fullscreen; xr-spatial-tracking"
                                    src={`${modelUrl}?autostart=1&ui_theme=dark&ui_info=0&ui_watermark=0&ui_controls=1&ui_stop=0&ui_annotations=0&ui_creator=0&ui_vr=0&ui_ar=0&ui_help=0&ui_settings=0`}
                                    onLoad={() => setIsLoading(false)}
                                />
                                {/* MF Branding Overlays to hide Sketchfab author/metadata */}
                                <div className="absolute top-0 left-0 w-48 h-16 bg-gradient-to-br from-black via-black/80 to-transparent pointer-events-none z-30" />
                                <div className="absolute top-4 left-4 flex items-center gap-2 z-40 pointer-events-none">
                                    <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
                                    <span className="text-[9px] font-black tracking-[0.3em] text-white/50 uppercase">
                                        MF ITALY 3D VISION
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="absolute inset-0 pointer-events-none border border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-colors duration-500 z-30" />
            </div>
        </div>
    );
};

export default CarModel3D;
