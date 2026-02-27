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

    // Timeout Fallback
    useEffect(() => {
        if (isVisible && isLoading) {
            const timer = setTimeout(() => {
                if (isLoading) setHasError(true);
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, isLoading]);

    // Build URL — strip any existing ui params then re-add our clean set
    // The key params to hide branding: ui_watermark=0, ui_infos=0, ui_creator=0, ui_animations=0, ui_help=0, ui_settings=0, ui_stop=0, ui_vr=0, ui_ar=0
    const baseUrl = modelUrl.split('?')[0];
    const cleanSrc = `${baseUrl}?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_controls=0&ui_stop=0&ui_annotations=0&ui_creator=0&ui_vr=0&ui_ar=0&ui_help=0&ui_settings=0&ui_animations=0&camera=0&transparent=1&autospin=0.2`;

    return (
        <div className="mb-12" ref={containerRef}>
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center">
                <div className="w-8 h-[1px] bg-luxury-gold mr-3"></div>
                VISUALIZZAZIONE 3D
            </h3>

            <div className="w-full aspect-video bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden relative group">
                <AnimatePresence mode="wait">
                    {!isVisible ? (
                        <motion.div
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-luxury-black"
                        >
                            <div className="w-8 h-8 border-2 border-luxury-gold/30 border-t-luxury-gold rounded-full animate-spin" />
                        </motion.div>
                    ) : hasError ? (
                        <motion.img
                            key="fallback"
                            src={fallbackImage}
                            alt={`${name} 3D Fallback`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full h-full object-cover"
                        />
                    ) : (
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
                                    src={cleanSrc}
                                    onLoad={() => setIsLoading(false)}
                                />

                                {/* ── Overlay: top-left — covers Sketchfab logo + model title ── */}
                                <div className="absolute top-0 left-0 w-64 h-20 pointer-events-none z-30"
                                    style={{ background: 'linear-gradient(135deg, #000 0%, rgba(0,0,0,0.85) 50%, transparent 100%)' }} />
                                <div className="absolute top-3 left-4 flex items-center gap-2 z-40 pointer-events-none">
                                    <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
                                    <span className="text-[9px] font-black tracking-[0.3em] text-white/60 uppercase">
                                        MF ITALY 3D VISION
                                    </span>
                                </div>

                                {/* ── Overlay: bottom-right — covers Sketchfab watermark + author name ── */}
                                <div className="absolute bottom-0 right-0 w-72 h-14 pointer-events-none z-30"
                                    style={{ background: 'linear-gradient(315deg, #000 0%, rgba(0,0,0,0.9) 40%, transparent 100%)' }} />

                                {/* ── Overlay: bottom-left — covers any bottom branding strip ── */}
                                <div className="absolute bottom-0 left-0 w-full h-10 pointer-events-none z-30"
                                    style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)' }} />

                                {/* ── MF brand stamp bottom-right ── */}
                                <div className="absolute bottom-3 right-4 flex items-center gap-2 z-40 pointer-events-none">
                                    <span className="text-[8px] font-black tracking-[0.25em] text-white/30 uppercase">
                                        MF ITALY
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="absolute inset-0 pointer-events-none border border-luxury-gold/0 group-hover:border-luxury-gold/40 transition-colors duration-500 z-30 rounded-2xl" />
            </div>
        </div>
    );
};

export default CarModel3D;
