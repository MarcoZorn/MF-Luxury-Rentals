import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { locations } from '../data/locations';
import { useLanguage } from '../hooks/useLanguage';

const Sitemap: React.FC = () => {
    const { t } = useLanguage();

    const sections = [
        {
            title: t('nav.home'),
            links: [
                { name: t('nav.home'), path: '/' },
                { name: t('nav.about'), path: '/about' },
                { name: t('nav.contact'), path: '/contact' }
            ]
        },
        {
            title: t('nav.fleet'),
            links: [
                { name: t('featured.viewAll'), path: '/fleet' },
                { name: 'Bugatti Chiron (VIP)', path: '/bugatti-chiron' },
                { name: 'Ferrari', path: '/fleet?brand=ferrari' },
                { name: 'Lamborghini', path: '/fleet?brand=lamborghini' },
                { name: 'Porsche', path: '/fleet?brand=porsche' },
                { name: 'Audi', path: '/fleet?brand=audi' },
                { name: 'Mercedes', path: '/fleet?brand=mercedes' },
                { name: 'BMW', path: '/fleet?brand=bmw' },
                { name: 'Bentley', path: '/fleet?brand=bentley' },
                { name: 'Maserati', path: '/fleet?brand=maserati' }
            ]
        },
        {
            title: t('nav.services'),
            links: [
                { name: t('nav.services'), path: '/services' },
                { name: t('nav.wedding'), path: '/wedding' }
            ]
        },
        {
            title: t('nav.locations'),
            links: locations.map(loc => ({
                name: t(`locations.cities.${loc.id}`), // Use translation key
                path: `/contact/${loc.id}`
            }))
        },
        {
            title: 'Legal',
            links: [
                { name: t('footer.privacy'), path: '/privacy' },
                { name: t('footer.terms'), path: '/terms' },
                { name: t('footer.cookies'), path: '/cookies' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-luxury-black text-white pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-luxury-gold mb-4 tracking-tighter">
                        SITEMAP
                    </h1>
                    <div className="h-1 w-24 bg-luxury-gold mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:border-luxury-gold/20 transition-colors"
                        >
                            <h2 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">
                                {section.title}
                            </h2>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-luxury-gold transition-colors text-sm uppercase tracking-wider flex items-center group"
                                        >
                                            <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
