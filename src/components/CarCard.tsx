import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Zap } from 'lucide-react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

export interface CarProps {
    id: string;
    name: string;
    category: string;
    categoryKey: string;
    tags: string[];
    image: string;
    hoverImage?: string;
    backupImage?: string;
    specs: {
        power: string;
        acceleration: string;
        speed: string;
        engine?: string;
    };
    pricePerDay: number;
    descriptionKey: string;
}

interface CarCardProps {
    car: CarProps;
}

import { useLanguage } from '../hooks/useLanguage';

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = React.useState(false);
    const [imgSrc, setImgSrc] = React.useState(car.image);

    React.useEffect(() => {
        if (isHovered && car.hoverImage) {
            setImgSrc(car.hoverImage);
        } else {
            setImgSrc(car.image);
        }
    }, [isHovered, car.image, car.hoverImage]);

    const handleError = () => {
        if (imgSrc !== car.backupImage && car.backupImage) {
            setImgSrc(car.backupImage);
        }
    };

    return (
        <motion.div
            className="group relative bg-[#0A0A0A] overflow-hidden border border-[#1A1A1A] hover:border-luxury-gold transition-colors duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={`${car.name} card`}
        >
            {/* Image Container */}
            <Link to={`/cars/${car.id}`} className="block relative h-64 overflow-hidden shrink-0" aria-hidden="true" tabIndex={-1}>
                <motion.img
                    src={imgSrc}
                    alt={car.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'brightness-110 contrast-110' : 'brightness-90'}`}
                    loading="lazy"
                    decoding="async"
                    onError={handleError}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-80'}`} />

                {/* Lights Glow Effect */}
                <div className={`absolute inset-0 bg-luxury-gold/5 pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-luxury-black/80 backdrop-blur-md px-3 py-1 border border-luxury-gold/30 rounded text-xs text-luxury-gold font-bold tracking-widest uppercase">
                    {t(`fleet.categories.${car.categoryKey}`)}
                </div>
            </Link>

            {/* Content */}
            <div className="p-6 relative z-10 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-luxury-gold transition-colors">
                        <Link to={`/cars/${car.id}`}>{car.name}</Link>
                    </h3>
                    <p className="text-luxury-gold font-bold text-xs uppercase tracking-widest">
                        {t('carCard.onRequest')}
                    </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 border-t border-white/10 pt-4 mt-auto" aria-label="Car specifications">
                    <div className="flex items-center">
                        <Zap size={14} className="text-luxury-gold mr-3 opacity-70" aria-hidden="true" />
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{car.specs.power}</span>
                    </div>
                    <div className="flex items-center justify-end">
                        <Gauge size={14} className="text-luxury-gold mr-3 opacity-70" aria-hidden="true" />
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{car.specs.acceleration}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-[11px] font-black text-luxury-gold/50 mr-3">CC</span>
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{car.specs.engine || 'N/D'}</span>
                    </div>
                    <div className="flex items-center justify-end">
                        <span className="text-[11px] font-black text-luxury-gold/50 mr-3">VMAX</span>
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{car.specs.speed}</span>
                    </div>
                </div>

                <Link to={`/cars/${car.id}`} className="block mt-auto">
                    <Button variant="outline" fullWidth className="group-hover:bg-luxury-gold group-hover:text-luxury-black">
                        {car.id === 'bugatti-chiron' ? t('carCard.onRequest') : t('carCard.details')} <ArrowRight size={16} className="ml-2" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default CarCard;
