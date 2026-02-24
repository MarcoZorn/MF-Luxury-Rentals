import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Star, Crown } from 'lucide-react';

import { useLanguage } from '../../hooks/useLanguage';

const WhyChooseUs: React.FC = () => {
    const { t } = useLanguage();

    interface Feature {
        title: string;
        desc: string;
    }

    // Define icons map for features
    const icons = [Crown, Shield, Clock, Star];

    // Safety check for features array
    const rawFeatures = t('whyChooseUs.features');
    const featuresList = Array.isArray(rawFeatures) ? rawFeatures : [];

    const features = (featuresList as unknown as Feature[]).map((f, i) => ({
        ...f,
        icon: icons[i % icons.length]
    }));

    if (!Array.isArray(rawFeatures)) return null;

    return (
        <section className="py-24 bg-gradient-to-b from-luxury-black to-gray-900 border-y border-white/5" aria-label={t('whyChooseUs.title')}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{t('whyChooseUs.title')}</h2>
                    <div className="w-20 h-1 bg-luxury-gold mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 bg-luxury-black/50 rounded-full border border-luxury-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:border-luxury-gold group-hover:bg-luxury-gold/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                <feature.icon size={32} className="text-white group-hover:text-luxury-gold transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4 tracking-wider">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
