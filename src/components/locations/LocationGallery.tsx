import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { locations } from '../../data/locations';
import { Link } from 'react-router-dom';

const countryMap: Record<string, string> = {
    ibiza: 'Spagna',
    barcellona: 'Spagna',
    cannes: 'Francia',
    parigi: 'Francia',
    montecarlo: 'Monaco',
    berlino: 'Germania',
    miami: 'USA',
};

const LocationGallery: React.FC = () => {
    const { t } = useLanguage();

    const galleryLocations = locations.map(loc => ({
        id: loc.id,
        name: t(`locations.cities.${loc.id}`),
        country: countryMap[loc.id] || 'Italia',
        image: loc.image,
        desc: t(`locations.cityDescs.${loc.id}`)
    }));

    return (
        <section className="py-24 bg-luxury-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div>
                        <span className="text-luxury-gold font-bold tracking-[0.4em] uppercase mb-4 block text-xs">
                            {t('locations.heroTag')}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-tighter">
                            {t('locations.galleryTitle')}
                        </h2>
                        <div className="h-1 w-24 bg-luxury-gold" />
                    </div>
                    <p className="text-gray-400 max-w-md mt-6 md:mt-0 font-light text-lg">
                        {t('locations.gallerySubtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryLocations.map((loc, index) => (
                        <Link to={`/contact/${loc.id}`} key={loc.id} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative h-[420px] overflow-hidden rounded-2xl cursor-pointer"
                            >
                                {/* Image */}
                                <img
                                    src={loc.image}
                                    alt={loc.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                {/* Gold border on hover */}
                                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-luxury-gold/40 transition-all duration-500" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="flex items-center text-luxury-gold mb-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                                        <MapPin size={14} className="mr-2" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{loc.country}</span>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        {loc.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-light mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                                        {loc.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <span>Contatta questa sede</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationGallery;
