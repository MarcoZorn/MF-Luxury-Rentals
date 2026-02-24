import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Star } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import mfBollino from '../../assets/images/branding/bollino-mf_nuovo.jpeg';

const Guarantee: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-gradient-to-b from-gray-900 to-luxury-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header with Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    {/* Winner Badge Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="flex justify-center mb-10"
                    >
                        <div className="relative group">
                            <img
                                src={mfBollino}
                                alt="MF Italy Luxury Certification"
                                className="h-48 w-auto object-contain transition-all duration-700 grayscale contrast-125 brightness-150 opacity-40 group-hover:opacity-60 group-hover:scale-105 smudged-watermark"
                            />
                            {/* Inner Stamp Detail - Optional refined overlay if needed */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-[10px] font-black tracking-[0.5em] text-luxury-gold/30 uppercase mt-2">CERTIFIED EXCELLENCE</span>
                            </div>
                        </div>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter uppercase">
                        {t('guarantee.title')}
                    </h2>
                    <div className="w-32 h-1 bg-luxury-gold mx-auto mb-10" />
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                        {t('guarantee.subtitle')}
                    </p>
                </motion.div>

                {/* Feature Icons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {[
                        { icon: Shield, title: t('guarantee.shield.title'), desc: t('guarantee.shield.desc') },
                        { icon: Clock, title: t('guarantee.clock.title'), desc: t('guarantee.clock.desc') },
                        { icon: Star, title: t('guarantee.star.title'), desc: t('guarantee.star.desc') },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group cursor-default"
                        >
                            <div className="w-24 h-24 rounded-3xl bg-luxury-gold/5 border-2 border-luxury-gold/20 flex items-center justify-center mb-8 group-hover:bg-luxury-gold/10 group-hover:border-luxury-gold/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                                <item.icon size={36} className="text-luxury-gold group-hover:text-glow transition-all" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-[0.1em]">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
