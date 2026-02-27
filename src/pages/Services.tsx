import React from 'react';
import { motion } from 'framer-motion';
import { Car, Send, UserCheck, ShieldCheck, Plane, Anchor, Briefcase, Heart, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import jetImg from '../assets/images/services/jet.jpg';
import yachtImg from '../assets/images/services/yacht.jpg';

const Services: React.FC = () => {
    const { t } = useLanguage();



    return (
        <div className="min-h-screen bg-luxury-black text-white pt-32 pb-20">
            <div className="container mx-auto px-6">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 text-center max-w-5xl mx-auto"
                >
                    <span className="text-luxury-gold font-bold tracking-[0.4em] uppercase mb-6 block text-xs">
                        {t('services.intro')}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 uppercase leading-none tracking-tighter">
                        {t('services.heroTitle')}
                    </h1>
                    <div className="w-24 h-1 bg-luxury-gold mx-auto mb-10" />
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto">
                        {t('services.heroSubtitle')}
                    </p>
                </motion.div>

                {/* Main Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {[
                        { icon: Car, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80' },
                        { icon: Send, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80' },
                        { icon: UserCheck, image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80' },
                        { icon: ShieldCheck, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80' }
                    ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative h-[400px] overflow-hidden rounded-3xl group"
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <Icon size={40} className="text-luxury-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <h2 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-wide">
                                        {t(`services.items.${index}.title`)}
                                    </h2>
                                    <p className="text-gray-300 text-sm leading-relaxed font-light line-clamp-3">
                                        {t(`services.items.${index}.desc`)}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Premium Experiences */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-luxury-gold uppercase tracking-tighter">
                        {t('services.premiumIntro')}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { icon: Plane, image: jetImg },
                        { icon: Anchor, image: yachtImg },
                        { icon: Briefcase, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' }
                    ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative h-[300px] overflow-hidden rounded-3xl group text-center"
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                                    <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                                        <Icon size={28} className="text-luxury-gold" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide">
                                        {t(`services.experiences.${index}.title`)}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed font-light text-xs max-w-[250px]">
                                        {t(`services.experiences.${index}.desc`)}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Wedding Services Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mb-20 overflow-hidden rounded-[3rem] group cursor-pointer"
                >
                    <Link to="/wedding" className="block">
                        {/* Background image */}
                        <div className="relative h-[420px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80"
                                alt="Wedding Service"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center px-16">
                                <div className="max-w-xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                                            <Heart size={22} className="text-luxury-gold" />
                                        </div>
                                        <span className="text-luxury-gold font-bold tracking-[0.4em] uppercase text-xs">
                                            WEDDING SERVICE
                                        </span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-6 leading-tight">
                                        {t('wedding.heroTitle')}
                                    </h2>
                                    <p className="text-gray-300 text-lg font-light mb-10 leading-relaxed">
                                        {t('wedding.heroSubtitle')}
                                    </p>
                                    <div className="inline-flex items-center gap-3 bg-luxury-gold text-black px-8 py-4 rounded-full font-bold tracking-widest text-sm uppercase group-hover:bg-white transition-colors duration-300">
                                        SCOPRI IL SERVIZIO
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center bg-luxury-gold/5 p-16 rounded-[4rem] border border-luxury-gold/20"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 uppercase tracking-widest">
                        {t('services.cta')}
                    </h2>
                    <a href="https://wa.me/390123456789" target="_blank" rel="noopener noreferrer">
                        <Button className="px-16 py-6 bg-luxury-gold text-black font-black tracking-[0.2em] text-sm rounded-full shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform">
                            WHATSAPP DIRECT
                        </Button>
                    </a>
                </motion.div>

            </div>
        </div>
    );
};

export default Services;
