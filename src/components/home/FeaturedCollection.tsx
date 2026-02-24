import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars } from '../../data/cars';
import CarCard from '../CarCard';
import Button from '../ui/Button';

import { useLanguage } from '../../hooks/useLanguage';

const FeaturedCollection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="parco-auto" className="py-24 bg-luxury-black relative z-10 min-h-[500px]" aria-label={t('featured.titlePart1') + t('featured.luxury')}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-luxury-gold font-bold tracking-[0.3em] uppercase mb-2 block text-sm">{t('featured.tag')}</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                            {t('featured.titlePart1')}<span className="text-luxury-gold">{t('featured.luxury')}</span>
                        </h2>
                    </div>
                    <Link to="/fleet">
                        <Button variant="ghost" className="hidden md:flex">
                            {t('featured.viewAll')} <ArrowRight size={20} className="ml-2" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Show only top 3 featured cars */}
                    {cars.slice(0, 3).map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <CarCard car={car} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/fleet">
                        <Button variant="outline" fullWidth>
                            {t('featured.viewAllMobile')}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;
