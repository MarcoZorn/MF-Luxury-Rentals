import React from 'react';
import { Zap, Gauge, Wind, Activity } from 'lucide-react';

interface CarSpecsProps {
    power: string;
    acceleration: string;
    speed: string;
    engine?: string;
}

import { useLanguage } from '../../hooks/useLanguage';

const CarSpecs: React.FC<CarSpecsProps> = ({ power, acceleration, speed, engine }) => {
    const { t } = useLanguage();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <Zap className="mx-auto text-luxury-gold mb-2" size={20} />
                <span className="block text-xl font-bold">{power}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{t('carDetail.specs.power')}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <Gauge className="mx-auto text-luxury-gold mb-2" size={20} />
                <span className="block text-xl font-bold">{acceleration}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{t('carDetail.specs.acceleration')}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <Wind className="mx-auto text-luxury-gold mb-2" size={20} />
                <span className="block text-xl font-bold">{speed}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{t('carDetail.specs.speed')}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <Activity className="mx-auto text-luxury-gold mb-2" size={20} />
                <span className="block text-xl font-bold">{engine || 'N/D'}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Cilindrata</span>
            </div>
        </div>
    );
};

export default CarSpecs;
