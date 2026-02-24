import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

interface CarHeroProps {
    image: string;
    backupImage?: string;
    name: string;
}

const CarHero: React.FC<CarHeroProps> = ({ image, backupImage, name }) => {
    const { t } = useLanguage();
    const [imgSrc, setImgSrc] = React.useState(image);

    const handleError = () => {
        if (imgSrc !== backupImage && backupImage) {
            setImgSrc(backupImage);
        }
    };

    return (
        <div className="w-full h-[60vh] bg-gray-900 relative">
            <div className="w-full h-full relative">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    src={imgSrc}
                    alt={name}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    onError={handleError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
            </div>

            <Link to="/fleet" className="absolute top-8 left-8 z-20">
                <Button variant="secondary" size="sm" className="flex items-center backdrop-blur-md bg-black/30 border-white/10 hover:bg-luxury-gold hover:text-black transition-all group font-bold tracking-widest uppercase text-xs">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> {t('nav.fleet')}
                </Button>
            </Link>
        </div>
    );
};

export default CarHero;
