import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Car, Send, UserCheck, ShieldCheck, Plane, Anchor, Briefcase, Heart, ArrowRight, Star, Clock, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import jetImg from '../assets/images/services/jet.jpg';
import yachtImg from '../assets/images/services/yacht.jpg';

const trustBadges = [
    { icon: Star, label: 'Best Luxury Rental 2024' },
    { icon: ShieldCheck, label: 'Full Kasko Insurance' },
    { icon: Clock, label: '24/7 Concierge Support' },
    { icon: CheckCircle, label: '8+ Years of Excellence' },
];

const Services: React.FC = () => {
    const { t } = useLanguage();
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    const mainServices = [
        { icon: Car, key: 0, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80' },
        { icon: Send, key: 1, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80' },
        { icon: UserCheck, key: 2, image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80' },
        { icon: ShieldCheck, key: 3, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80' },
    ];

    const premiumExperiences = [
        { icon: Plane, key: 0, image: jetImg },
        { icon: Anchor, key: 1, image: yachtImg },
        { icon: Briefcase, key: 2, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' },
    ];

    return (
        <div className="min-h-screen bg-luxury-black text-white overflow-hidden">

            {/* ── Parallax Hero ── */}
            <div ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20">
                <motion.div
                    style={{ y: bgY }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=80"
                        alt=""
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/40 to-luxury-black" />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-luxury-gold font-bold tracking-[0.5em] uppercase mb-6 block text-xs"
                    >
                        {t('services.intro')}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-9xl font-display font-bold uppercase leading-none tracking-tighter mb-6"
                    >
                        {t('services.heroTitle')}
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-[2px] bg-luxury-gold mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
                    >
                        {t('services.heroSubtitle')}
                    </motion.p>
                </div>
            </div>

            {/* ── Trust Badges Strip ── */}
            <div className="border-y border-white/5 bg-white/[0.02] py-5 mb-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
                        {trustBadges.map(({ icon: Icon }, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-center gap-3"
                            >
                                <Icon size={18} className="text-luxury-gold" />
                                <span className="text-[11px] font-bold tracking-[0.25em] text-white/60 uppercase">
                                    {t(`services.trustBadges.${i}`)}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pb-32">

                {/* ── Main Services Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {mainServices.map(({ icon: Icon, key, image }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative h-[440px] overflow-hidden rounded-3xl group cursor-default"
                        >
                            <img
                                src={image}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500" />

                            {/* Gold accent bar */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-luxury-gold via-luxury-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="w-14 h-14 rounded-2xl bg-luxury-gold/15 backdrop-blur-sm border border-luxury-gold/30 flex items-center justify-center mb-5 group-hover:bg-luxury-gold/25 transition-colors">
                                    <Icon size={26} className="text-luxury-gold" />
                                </div>
                                <h2 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-wide">
                                    {t(`services.items.${key}.title`)}
                                </h2>
                                <p className="text-gray-300 text-sm leading-relaxed font-light">
                                    {t(`services.items.${key}.desc`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Premium Experiences Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="text-luxury-gold text-[10px] font-black tracking-[0.5em] uppercase mb-3 block">
                            {t('services.beyondCar')}
                        </span>
                        <h2 className="text-3xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">
                            {t('services.premiumIntro')}
                        </h2>
                    </div>
                    <p className="text-gray-400 font-light max-w-xs text-right text-sm leading-relaxed hidden md:block">
                        {t('services.detailsMasterful')}
                    </p>
                </motion.div>

                {/* ── Premium Experiences — Wide Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    {premiumExperiences.map(({ icon: Icon, key, image }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative h-[380px] overflow-hidden rounded-3xl group"
                        >
                            <img
                                src={image}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-75"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

                            {/* Glowing border ring on hover */}
                            <div className="absolute inset-0 rounded-3xl border border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-all duration-500 shadow-[inset_0_0_30px_rgba(212,175,55,0)] group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.08)]" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                                <div className="w-20 h-20 rounded-full bg-luxury-gold/15 backdrop-blur-md border border-luxury-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Icon size={34} className="text-luxury-gold" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-wide">
                                    {t(`services.experiences.${key}.title`)}
                                </h3>
                                <p className="text-gray-200 leading-relaxed font-light text-sm max-w-[240px] opacity-80 group-hover:opacity-100 transition-opacity">
                                    {t(`services.experiences.${key}.desc`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Wedding Promo Banner ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mb-24 overflow-hidden rounded-[3rem] group cursor-pointer"
                >
                    <Link to="/wedding" className="block">
                        <div className="relative h-[460px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80"
                                alt="Wedding Service"
                                className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

                            {/* Decorative lines */}
                            <div className="absolute top-10 right-10 w-32 h-32 border border-luxury-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute top-16 right-16 w-20 h-20 border border-luxury-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />

                            <div className="absolute inset-0 flex items-center px-16">
                                <div className="max-w-xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-luxury-gold/20 border border-luxury-gold/40 flex items-center justify-center">
                                            <Heart size={22} className="text-luxury-gold" />
                                        </div>
                                        <span className="text-luxury-gold font-bold tracking-[0.5em] uppercase text-[10px]">
                                            {t('nav.wedding')}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6 leading-tight">
                                        {t('wedding.heroTitle')}
                                    </h2>
                                    <p className="text-gray-300 text-lg font-light mb-10 leading-relaxed max-w-md">
                                        {t('wedding.heroSubtitle')}
                                    </p>
                                    <div className="inline-flex items-center gap-3 bg-luxury-gold text-black px-8 py-4 rounded-full font-bold tracking-wider text-sm uppercase group-hover:bg-white transition-colors duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.3)]">
                                        {t('wedding.cta')}
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* ── Why Choose MF — Feature Pills ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-2xl md:text-4xl font-display font-bold text-white text-center mb-12 uppercase tracking-tight">
                        {t('services.whyChooseTitle').split(' ')[0]} {t('services.whyChooseTitle').split(' ')[1]} <span className="text-luxury-gold">{t('services.whyChooseTitle').split(' ').slice(2).join(' ')}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/[0.03] border border-white/8 rounded-3xl p-8 hover:border-luxury-gold/30 hover:bg-white/[0.05] transition-all duration-500 group"
                            >
                                <div className="w-10 h-[2px] bg-luxury-gold mb-6 group-hover:w-16 transition-all duration-500" />
                                <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
                                    {t(`services.whyChooseItems.${i}.title`)}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">
                                    {t(`services.whyChooseItems.${i}.desc`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Final CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative text-center bg-luxury-gold/5 p-16 rounded-[4rem] border border-luxury-gold/20 overflow-hidden"
                >
                    {/* Ambient glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

                    <Star size={40} className="text-luxury-gold mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">
                        {t('services.cta')}
                    </h2>
                    <p className="text-gray-400 mb-10 text-lg font-light max-w-xl mx-auto">
                        {t('services.conciergeAvailability')}
                    </p>
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <a href="https://wa.me/393206144070" target="_blank" rel="noopener noreferrer">
                            <Button className="px-12 py-5 bg-luxury-gold text-black font-black tracking-[0.2em] text-sm rounded-full shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:shadow-[0_0_80px_rgba(212,175,55,0.5)] hover:scale-105 transition-all">
                                {t('services.whatsappDirect')}
                            </Button>
                        </a>
                        <Link to="/contact">
                            <Button variant="outline" className="px-12 py-5 rounded-full font-bold tracking-widest text-sm border-white/20 text-white hover:border-luxury-gold hover:text-luxury-gold transition-all">
                                {t('services.contactUs')}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
