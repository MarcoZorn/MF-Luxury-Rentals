import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Camera, Gift, Star, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import wedding1 from '../assets/images/wedding/wedding_main.jpg';
import wedding2 from '../assets/images/wedding/wedding_ceremony.jpg';

const Wedding: React.FC = () => {
    const { t } = useLanguage();
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

    const bullets: string[] = [
        'Luxury Supercar & Cabriolet Fleet for the Wedding Day',
        'Professional private driver in tailored uniform',
        'White-glove ribbon & floral decoration service',
        'Chauffeur coordination from ceremony to reception',
        'Airport & helipad transfer for VIP guests',
        'Customised Grand Tour route for the newlyweds',
    ];

    return (
        <div className="min-h-screen bg-luxury-black text-white overflow-hidden">

            {/* ── Parallax Cinematic Hero ── */}
            <div ref={heroRef} className="relative h-screen flex items-end pb-24 overflow-hidden">
                <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=90"
                        alt="Wedding luxury supercar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-luxury-black" />
                    <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-transparent to-transparent" />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-36 right-10 md:right-20 z-20 hidden md:block"
                >
                    <div className="px-6 py-3 bg-black/40 backdrop-blur-xl border border-luxury-gold/30 rounded-full">
                        <span className="text-luxury-gold text-[9px] font-black tracking-[0.5em] uppercase">
                            MF EXCLUSIVE WEDDING
                        </span>
                    </div>
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 md:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-luxury-gold/20 border border-luxury-gold/40 flex items-center justify-center">
                                <Heart size={20} className="text-luxury-gold" />
                            </div>
                            <span className="text-luxury-gold font-bold tracking-[0.5em] uppercase text-[10px]">
                                {t('wedding.intro')}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold uppercase tracking-tighter leading-none mb-6 max-w-3xl">
                            {t('wedding.heroTitle')}
                        </h1>
                        <div className="w-20 h-[2px] bg-luxury-gold mb-6" />
                        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-xl leading-relaxed mb-10">
                            {t('wedding.heroSubtitle')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://wa.me/393206144070" target="_blank" rel="noopener noreferrer">
                                <motion.div
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-3 bg-luxury-gold text-black px-8 py-4 rounded-full font-black tracking-wider text-sm uppercase shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_60px_rgba(212,175,55,0.6)] cursor-pointer"
                                >
                                    <Phone size={18} />
                                    CONTATTACI ORA
                                </motion.div>
                            </a>
                            <Link to="/contact">
                                <motion.div
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-bold tracking-wider text-sm uppercase hover:border-luxury-gold hover:text-luxury-gold transition-all cursor-pointer"
                                >
                                    RICHIEDI PREVENTIVO
                                    <ArrowRight size={18} />
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Long-form description ── */}
            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-luxury-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
                            IL SERVIZIO
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight leading-tight mb-8">
                            {t('wedding.title')}
                        </h2>
                        <p className="text-gray-300 leading-relaxed font-light text-lg mb-8">
                            {t('wedding.subtitle')}
                        </p>
                        <ul className="space-y-4">
                            {bullets.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle size={18} className="text-luxury-gold mt-0.5 shrink-0" />
                                    <span className="text-gray-300 font-light text-sm leading-relaxed">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Stacked wedding photos */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[500px]">
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                                <img
                                    src={wedding1}
                                    alt="Luxury Wedding"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            {/* Floating second image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, rotate: 3 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-12 -right-6 w-48 h-64 rounded-[1.5rem] overflow-hidden border-2 border-luxury-gold/40 shadow-2xl"
                            >
                                <img
                                    src={wedding2}
                                    alt="Wedding Ceremony"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Services Feature Cards ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-luxury-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
                        COSA OFFRIAMO
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
                        {t('wedding.cta')}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {[Star, Gift, Heart, Camera].map((Icon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/[0.03] border border-white/8 p-8 rounded-3xl hover:border-luxury-gold/30 hover:bg-white/[0.05] transition-all duration-500 group text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-luxury-gold/8 border border-luxury-gold/20 flex items-center justify-center mb-6 mx-auto group-hover:bg-luxury-gold/20 group-hover:border-luxury-gold/50 transition-all duration-500 group-hover:scale-110">
                                <Icon size={28} className="text-luxury-gold" />
                            </div>
                            <h3 className="text-base font-display font-bold text-white mb-3 uppercase tracking-wide">
                                {t(`wedding.items.${index}.title`)}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {t(`wedding.items.${index}.desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* ── Full-width Cinematic Banner ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[500px] rounded-[3rem] overflow-hidden mb-24 group cursor-default"
                >
                    <img
                        src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1400&q=80"
                        alt="Luxury wedding car"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-2000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-10 max-w-3xl">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="w-20 h-20 rounded-full bg-luxury-gold/20 border border-luxury-gold/50 flex items-center justify-center mx-auto mb-8"
                            >
                                <Star size={36} className="text-luxury-gold" />
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight mb-4">
                                IL GIORNO PIÙ BELLO
                            </h2>
                            <p className="text-luxury-gold font-bold tracking-[0.4em] uppercase text-xs mb-8">
                                ELEGANZA SENZA COMPROMESSI
                            </p>
                            <p className="text-gray-200 font-light text-lg leading-relaxed">
                                Ogni dettaglio curato con maestria. Ogni momento reso eterno dall'eccellenza MF.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ── Final CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-gray-400 mb-8 text-lg font-light">
                        Rendi il tuo giorno speciale ancora più indimenticabile.
                    </p>
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <a href="https://wa.me/393206144070" target="_blank" rel="noopener noreferrer">
                            <Button className="px-12 py-5 bg-luxury-gold text-black font-black tracking-[0.2em] text-sm rounded-full shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:shadow-[0_0_80px_rgba(212,175,55,0.5)] hover:scale-105 transition-all">
                                WHATSAPP DIRECT
                            </Button>
                        </a>
                        <Link to="/services">
                            <Button variant="outline" className="px-12 py-5 rounded-full font-bold tracking-widest text-sm border-white/20 text-white hover:border-luxury-gold hover:text-luxury-gold transition-all">
                                {t('wedding.cta')}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Wedding;
