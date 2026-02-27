import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, Gift, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import wedding1 from '../assets/images/wedding/wedding_main.jpg';
import wedding2 from '../assets/images/wedding/wedding_ceremony.jpg';
import weddingHero from '../assets/images/ui/hero-poster.jpg';

const Wedding: React.FC = () => {
    const { t } = useLanguage();

    const services = [
        { icon: Star, title: t('wedding.items.0.title'), desc: t('wedding.items.0.desc') },
        { icon: Gift, title: t('wedding.items.1.title'), desc: t('wedding.items.1.desc') },
        { icon: Heart, title: t('wedding.items.2.title'), desc: t('wedding.items.2.desc') },
        { icon: Camera, title: t('wedding.items.3.title'), desc: t('wedding.items.3.desc') }
    ];

    return (
        <div className="min-h-screen bg-luxury-black text-white pt-32 pb-24">
            <div className="container mx-auto px-6">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-5xl mx-auto"
                >
                    <span className="text-luxury-gold font-bold tracking-[0.4em] uppercase mb-6 block text-xs">
                        {t('wedding.intro')}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 uppercase leading-none tracking-tighter">
                        {t('wedding.heroTitle')}
                    </h1>
                    <div className="w-24 h-1 bg-luxury-gold mx-auto mb-10" />
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-8 max-w-3xl mx-auto">
                        {t('wedding.heroSubtitle')}
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto text-lg font-light">
                        {t('wedding.subtitle')}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0A0A0A] p-10 rounded-3xl border border-white/5 hover:border-luxury-gold/30 transition-all duration-500 group text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-luxury-gold/5 flex items-center justify-center mb-6 mx-auto group-hover:bg-luxury-gold/20 transition-colors">
                                <service.icon size={32} className="text-luxury-gold" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-white mb-4 uppercase tracking-wide">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Image Gallery Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl"
                    >
                        <img
                            src={wedding1}
                            alt="Luxury Wedding Scene"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl"
                    >
                        <img
                            src={wedding2}
                            alt="Elegance at Wedding"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </motion.div>
                </div>

                {/* Banner Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative h-[400px] rounded-[3rem] overflow-hidden mb-24 border border-white/10 group shadow-2xl"
                >
                    <img
                        src={weddingHero}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-all duration-1000 group-hover:opacity-40 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/80 to-luxury-black z-10" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center">
                            <Star size={48} className="text-luxury-gold mx-auto mb-6 opacity-80" />
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-4">
                                NOSTRO SERVIZIO VIP
                            </h2>
                            <p className="text-xs font-bold text-luxury-gold tracking-[0.5em] uppercase">
                                ELEGANZA SENZA COMPROMESSI
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <Link to="/services">
                        <Button variant="outline" size="lg" className="px-12 py-5 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black font-bold tracking-widest uppercase">
                            {t('wedding.cta')}
                        </Button>
                    </Link>
                </motion.div>

            </div>
        </div>
    );
};

export default Wedding;
