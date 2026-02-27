import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import chironHero from '../assets/images/cars/bugatti_chiron_cinematic_on.png';
import { Phone, Award, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const BugattiChiron: React.FC = () => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleVipContact = () => {
        const event = new CustomEvent('openBooking', {
            detail: { carId: 'bugatti-chiron', isVip: true }
        });
        window.dispatchEvent(event);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white font-display overflow-hidden">
            {/* HERO SECTION - KINEMATIC & MINIMAL */}
            <section className="relative h-screen flex items-center justify-center pt-20">
                <div className="absolute inset-0">
                    <img
                        src={chironHero}
                        alt="Bugatti Chiron"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#050505]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
                </div>

                <div className="relative z-10 text-center container mx-auto px-6">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '1em' }}
                        animate={{ opacity: 1, letterSpacing: '0.4em' }}
                        transition={{ duration: 1.5 }}
                        className="text-luxury-gold font-bold uppercase text-[10px] mb-8 block"
                    >
                        {t('bugattiPage.pinnacle')}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-7xl md:text-9xl font-black mb-6 tracking-tighter uppercase leading-none"
                    >
                        BUGATTI<br />
                        <span className="text-luxury-gold text-glow-gold">CHIRON</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="w-32 h-[1px] bg-luxury-gold/50 mx-auto my-12"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 italic"
                    >
                        "{t('bugattiPage.invitationOnly')}"
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                        onClick={handleVipContact}
                        className="group relative px-12 py-6 overflow-hidden rounded-full transition-all duration-500 hover:scale-105 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
                    >
                        <div className="absolute inset-0 bg-luxury-gold transition-transform duration-500 group-hover:scale-110" />
                        <span className="relative z-10 text-black font-black tracking-widest text-sm uppercase">
                            {t('bugattiPage.requestContact')}
                        </span>
                    </motion.button>
                </div>

                {/* SCROLL INDICATOR */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] tracking-widest uppercase text-luxury-gold/50 font-bold">Discover More</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold/50 to-transparent" />
                </motion.div>
            </section>

            {/* ART OF PERFORMANCE SECTION */}
            <section className="py-32 container mx-auto px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold mb-10 tracking-tighter uppercase leading-tight">{t('bugattiPage.artOfMovement')}</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
                            {t('bugattiPage.artOfMovementDesc')}
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="border-l-[1px] border-luxury-gold/30 pl-6 py-2">
                                <div className="text-3xl font-black text-white">1500 CV</div>
                                <div className="text-[10px] tracking-widest text-luxury-gold uppercase mt-1 px-1 border border-luxury-gold/20 inline-block">{t('bugattiPage.stats.power')}</div>
                            </div>
                            <div className="border-l-[1px] border-luxury-gold/30 pl-6 py-2">
                                <div className="text-3xl font-black text-white">2.4S</div>
                                <div className="text-[10px] tracking-widest text-luxury-gold uppercase mt-1 px-1 border border-luxury-gold/20 inline-block">{t('bugattiPage.stats.acceleration')}</div>
                            </div>
                            <div className="border-l-[1px] border-luxury-gold/30 pl-6 py-2">
                                <div className="text-3xl font-black text-white">420 KM/H</div>
                                <div className="text-[10px] tracking-widest text-luxury-gold uppercase mt-1 px-1 border border-luxury-gold/20 inline-block">{t('bugattiPage.stats.speed')}</div>
                            </div>
                            <div className="border-l-[1px] border-luxury-gold/30 pl-6 py-2">
                                <div className="text-3xl font-black text-white">W16</div>
                                <div className="text-[10px] tracking-widest text-luxury-gold uppercase mt-1 px-1 border border-luxury-gold/20 inline-block">{t('bugattiPage.stats.engine')}</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[2rem] overflow-hidden group shadow-2xl shadow-luxury-gold/5"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1920&auto=format&fit=crop"
                            alt="Interior details"
                            className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                    </motion.div>
                </div>
            </section>

            {/* VIP CONCIERGE SECTION */}
            <section className="py-40 bg-zinc-950/50 border-y border-white/5">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <Award className="w-16 h-16 text-luxury-gold mx-auto mb-10" />
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter uppercase leading-tight">{t('bugattiPage.vipAccess')}</h2>
                    <p className="text-xl text-gray-500 font-light mb-16 italic">
                        {t('bugattiPage.vipQuote')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left">
                        <div className="bg-black/40 p-10 rounded-3xl border border-white/5 hover:border-luxury-gold/30 transition-all group">
                            <Shield className="w-10 h-10 text-luxury-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">{t('bugattiPage.features.security')}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{t('bugattiPage.features.securityDesc')}</p>
                        </div>
                        <div className="bg-black/40 p-10 rounded-3xl border border-white/5 hover:border-luxury-gold/30 transition-all group">
                            <Phone className="w-10 h-10 text-luxury-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">{t('bugattiPage.features.assistance')}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{t('bugattiPage.features.assistanceDesc')}</p>
                        </div>
                        <div className="bg-black/40 p-10 rounded-3xl border border-white/5 hover:border-luxury-gold/30 transition-all group">
                            <Clock className="w-10 h-10 text-luxury-gold mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-4 uppercase">{t('bugattiPage.features.logistics')}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{t('bugattiPage.features.logisticsDesc')}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleVipContact}
                        className="px-16 py-8 border-2 border-luxury-gold text-luxury-gold font-black tracking-widest text-lg rounded-full hover:bg-luxury-gold hover:text-black transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.1)] uppercase"
                    >
                        {t('bugattiPage.joinProgram')}
                    </button>
                </div>
            </section>

            {/* FOOTER LEAD */}
            <section className="py-20 text-center container mx-auto px-6 opacity-30">
                <p className="text-[10px] tracking-[0.8em] font-bold text-luxury-gold uppercase">{t('bugattiPage.division')}</p>
            </section>
        </div>
    );
};

export default BugattiChiron;
