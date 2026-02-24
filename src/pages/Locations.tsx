import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { locations } from '../data/locations';
import LocationsMap from '../components/locations/LocationsMap';
import { useLanguage } from '../hooks/useLanguage';
import LocationGallery from '../components/locations/LocationGallery';

const Locations: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-luxury-black text-white pt-32 pb-24">
            <div className="container mx-auto px-6">

                {/* Hero Text */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-luxury-gold font-bold tracking-[0.4em] uppercase mb-4 block text-xs"
                    >
                        {t('locations.heroTag')}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter"
                    >
                        {t('locations.heroTitle')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('locations.heroSubtitle')}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <LocationGallery />
                </motion.div>

                {/* Custom Map Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-32"
                >
                    <LocationsMap />
                </motion.div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 gap-16">
                    {locations.map((loc) => {
                        const cityKey = loc.id;
                        return (
                            <motion.div
                                key={loc.city}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-[#0A0A0A] border border-white/5 overflow-hidden rounded-3xl group hover:border-luxury-gold/30 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="relative h-80 lg:h-auto overflow-hidden">
                                        <img
                                            src={loc.image}
                                            alt=""
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent lg:hidden" />
                                    </div>
                                    <div className="p-10 lg:p-16 flex flex-col justify-center relative bg-luxury-black">
                                        <div className="mb-8">
                                            <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-3 tracking-tighter text-center lg:text-left">
                                                {t(`locations.cities.${cityKey}`)}
                                            </h2>
                                            <p className="text-luxury-gold text-sm font-bold tracking-[0.3em] uppercase opacity-90 text-center lg:text-left">
                                                {t(`locations.cityDescs.${cityKey}`)}
                                            </p>
                                        </div>

                                        <div className="space-y-6 text-gray-400 mb-10 border-l border-white/10 pl-8 py-2">
                                            <div className="flex items-center group/item cursor-default">
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-5 group-hover/item:bg-luxury-gold/20 transition-all">
                                                    <MapPin size={20} className="text-luxury-gold text-glow" />
                                                </div>
                                                <span className="text-base tracking-wide group-hover/item:text-white transition-colors">{loc.address}</span>
                                            </div>
                                            <div className="flex items-center group/item cursor-default">
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-5 group-hover/item:bg-luxury-gold/20 transition-all">
                                                    <Phone size={20} className="text-luxury-gold text-glow" />
                                                </div>
                                                <span className="text-base tracking-wide group-hover/item:text-white transition-colors">{loc.phone}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-5">
                                                    <Clock size={20} className="text-luxury-gold" />
                                                </div>
                                                <span className="text-base tracking-wide">{t('locations.hours')}</span>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <Link to={`/contact/${cityKey}`}>
                                                <Button variant="primary" size="lg" fullWidth className="font-bold tracking-[0.2em] text-xs py-5 shadow-luxury-gold/20">
                                                    {t('locations.contactBranch')} {t(`locations.cities.${cityKey}`)}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default Locations;
