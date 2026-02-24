import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Award, Zap, Trophy } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import conciergeImg from '../assets/images/ui/about-concierge.png';
import yachtImg from '../assets/images/services/yacht.png';
import jetImg from '../assets/images/services/jet.png';

const About: React.FC = () => {
    const { t } = useLanguage();

    const icons = [Star, Award, Users, Zap];

    return (
        <div className="min-h-screen bg-luxury-black text-white relative">
            {/* Background Image with Overlay */}
            <div className="fixed inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1600&q=80"
                    alt=""
                    className="w-full h-full object-cover opacity-60 grayscale scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/50 via-luxury-black/40 to-luxury-black" />
            </div>

            <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-4xl mx-auto"
                >
                    <span className="text-luxury-gold font-bold tracking-[0.5em] uppercase mb-6 block text-[10px]">
                        {t('about.heroTag')}
                    </span>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                        className="inline-flex items-center gap-3 px-6 py-2 mb-10 bg-luxury-gold/20 border border-luxury-gold/50 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                    >
                        <Trophy size={18} className="text-luxury-gold" />
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">
                            Winner Best Rental Luxury Cars 2024
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tighter uppercase leading-tight">
                        {t('about.heroTitle')}
                    </h1>

                    <p className="text-luxury-gold text-xs tracking-[0.4em] uppercase font-black mb-12 border-y border-luxury-gold/20 py-4 inline-block px-10">
                        {t('about.heroSubtitle')}
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                        {t('about.content')}
                    </p>
                </motion.div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {[0, 1, 2, 3].map((index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/10 hover:border-luxury-gold/40 transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] group h-full flex flex-col items-center text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 blur-[50px] -mr-10 -mt-10 group-hover:bg-luxury-gold/10 transition-colors" />
                                <div className="w-20 h-20 rounded-2xl bg-luxury-gold/5 flex items-center justify-center mb-10 border border-luxury-gold/10 group-hover:bg-luxury-gold/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                                    <Icon size={32} className="text-luxury-gold" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-6 tracking-wide uppercase">
                                    {t(`about.features.${index}.title`)}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light text-base max-w-sm">
                                    {t(`about.features.${index}.desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Cinematic Image Bridge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl"
                    >
                        <img
                            src={jetImg}
                            alt="Luxury Travel"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10">
                            <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest">PRIVATE EXPERIENCE</h3>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl"
                    >
                        <img
                            src={yachtImg}
                            alt="Luxury Sea"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10">
                            <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest">BEYOND LUXURY</h3>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative h-[60vh] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl"
                >
                    <img
                        src={conciergeImg}
                        alt="MF Luxury Concierge"
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer"
                        >
                            <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-4 uppercase tracking-tighter drop-shadow-2xl">
                                MF Italy Luxury
                            </h2>
                            <p className="text-luxury-gold text-xs tracking-[0.5em] uppercase font-black bg-black/40 backdrop-blur-sm py-2 px-6 rounded-full border border-luxury-gold/20">
                                BEYOND THE ROAD
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div >
    );
};

export default About;
