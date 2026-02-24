import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface LocationsTeaserProps {
    backgroundImage: string;
}

import { useLanguage } from '../../hooks/useLanguage';

const LocationsTeaser: React.FC<LocationsTeaserProps> = ({ backgroundImage }) => {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative bg-luxury-black overflow-hidden" aria-label={t('locations.titlePart1') + t('locations.everywhere')}>
            <div className="absolute inset-0 opacity-20 bg-cover bg-center grayscale" style={{ backgroundImage: `url(${backgroundImage})` }} />
            <div className="absolute inset-0 bg-black/60" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                    {t('locations.titlePart1')}<span className="text-luxury-gold">{t('locations.everywhere')}</span>
                </h2>
                <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-12">
                    {t('locations.subtitle')}
                </p>
                <Link to="/locations">
                    <Button size="lg" className="bg-white text-black hover:bg-luxury-gold hover:text-black border-none">
                        {t('locations.cta')}
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default LocationsTeaser;
