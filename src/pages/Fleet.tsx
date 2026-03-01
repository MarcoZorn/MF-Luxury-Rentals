import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import { useLanguage } from '../hooks/useLanguage';
const fleetHero = "/images/fleet/fleet-showcase-marble.webp";
import { Search, ArrowUpDown, X as CloseIcon } from 'lucide-react';

const Fleet: React.FC = () => {
    const { t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState("TUTTE");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const { search } = useLocation();

    React.useEffect(() => {
        const params = new URLSearchParams(search);
        const searchParam = params.get('search');
        if (searchParam) {
            setSearchQuery(searchParam);
            // Also reset category if searching by brand
            setSelectedCategory("TUTTE");
        }
    }, [search]);

    const categoriesList = [
        { label: t('fleet.categories.all'), value: "TUTTE" },
        { label: t('fleet.categories.suv'), value: "suv" },
        { label: t('fleet.categories.prestige'), value: "prestige" },
        { label: t('fleet.categories.luxury'), value: "luxury" },
        { label: t('fleet.categories.cabrio'), value: "cabrio" },
    ];

    const sortOptions = [
        { label: t('fleet.sortOptions.default'), value: "default" },
        { label: t('fleet.sortOptions.power'), value: "power" },
    ];

    // Filter and Sort Logic
    const chironCar = cars.find(c => c.id === 'bugatti-chiron');
    const processedCars = [...cars]
        .filter(car => car.id !== 'bugatti-chiron')
        .filter(car => {
            const matchesCategory = selectedCategory === "TUTTE" || car.tags.includes(selectedCategory);
            const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t(`fleet.categories.${car.categoryKey}`).toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            if (sortBy === "priceAsc") return a.pricePerDay - b.pricePerDay;
            if (sortBy === "priceDesc") return b.pricePerDay - a.pricePerDay;
            if (sortBy === "power") {
                const powerA = parseInt(a.specs.power) || 0;
                const powerB = parseInt(b.specs.power) || 0;
                return powerB - powerA;
            }
            if (sortBy === "default") {
                // Return original order or alphabetical
                return a.name.localeCompare(b.name);
            }
            return 0;
        });

    return (
        <div className="min-h-screen bg-luxury-black pb-20">

            {/* HER0 HEADER */}
            <div className="relative h-[50vh] flex items-center justify-center mb-16 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fleetHero})` }} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center container mx-auto px-6 mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                    >
                        {t('fleet.titlePart1')}<span className="text-luxury-gold text-glow">{t('fleet.collection')}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
                    >
                        {t('fleet.subtitle')}
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6">

                {/* Search & Sort Controls */}
                <div className="bg-luxury-black/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl mb-12 shadow-2xl">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">

                        {/* Search Bar */}
                        <div className="relative w-full lg:max-w-md group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-luxury-gold transition-colors" size={20} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t('fleet.searchPlaceholder')}
                                className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-12 pr-12 text-white focus:outline-none focus:border-luxury-gold/50 focus:ring-1 focus:ring-luxury-gold/20 transition-all placeholder:text-gray-600"
                                aria-label={t('fleet.searchPlaceholder')}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    <CloseIcon size={18} />
                                </button>
                            )}
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categoriesList.map((cat) => (
                                <button
                                    key={cat.value}
                                    onClick={() => setSelectedCategory(cat.value)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300 border ${selectedCategory === cat.value
                                        ? 'bg-luxury-gold border-luxury-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center space-x-3 w-full lg:w-auto shrink-0">
                            <span className="text-gray-500 text-xs font-bold tracking-widest uppercase hidden sm:inline">{t('fleet.sortBy')}</span>
                            <div className="relative w-full sm:w-64">
                                <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold" size={16} />
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-10 text-sm text-white focus:outline-none focus:border-luxury-gold/50 appearance-none cursor-pointer"
                                    aria-label={t('fleet.sortBy')}
                                >
                                    {sortOptions.length > 1 ? (
                                        sortOptions.map(opt => (
                                            <option key={opt.value} value={opt.value} className="bg-luxury-black text-white">{opt.label}</option>
                                        ))
                                    ) : (
                                        <option value="default" className="bg-luxury-black text-white">{t('fleet.sortOptions.default')}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                {processedCars.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {processedCars.map((car) => (
                                <motion.div
                                    key={car.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <CarCard car={car} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="text-center py-32 border border-dashed border-white/5 rounded-3xl">
                        <div className="mb-6 inline-flex p-6 bg-white/5 rounded-full text-gray-700">
                            <Search size={48} />
                        </div>
                        <p className="text-gray-500 text-xl font-light">{t('fleet.noCars')}</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedCategory("TUTTE"); }}
                            className="mt-6 text-luxury-gold hover:text-white font-bold tracking-widest text-sm transition-colors uppercase underline underline-offset-8"
                        >
                            Reset filtri
                        </button>
                    </div>
                )}

                {/* Bugatti Exclusive Section */}
                {chironCar && !searchQuery && (selectedCategory === "TUTTE" || selectedCategory === "luxury") && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 relative overflow-hidden rounded-[3rem] border border-luxury-gold/20 bg-gradient-to-br from-luxury-black via-gray-900 to-luxury-black p-8 md:p-16 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 blur-[100px] -mr-48 -mt-48" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <span className="text-luxury-gold font-bold tracking-[0.5em] uppercase mb-4 block text-[10px]">{t('fleet.exclusiveSection.tag')}</span>
                                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter uppercase leading-none">
                                    {t('fleet.exclusiveSection.title')}<br />
                                    <span className="text-luxury-gold">{t('fleet.exclusiveSection.subtitle')}</span>
                                </h2>
                                <p className="text-gray-400 text-lg font-light mb-10 max-w-md leading-relaxed">
                                    {t('fleet.exclusiveSection.desc')}
                                </p>
                                <button
                                    onClick={() => {
                                        window.location.href = '/bugatti-chiron';
                                    }}
                                    className="px-10 py-5 bg-luxury-gold text-black font-black tracking-widest text-sm rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] uppercase"
                                >
                                    {t('fleet.exclusiveSection.cta')}
                                </button>
                            </div>
                            <div className="order-1 lg:order-2 relative group">
                                <div className="absolute inset-0 bg-luxury-gold/5 blur-3xl group-hover:bg-luxury-gold/10 transition-all duration-700" />
                                <img
                                    src={chironCar.image}
                                    alt="Bugatti Chiron"
                                    className="relative z-10 w-full h-auto object-contain scale-110 group-hover:scale-115 transition-transform duration-1000"
                                />
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/40 blur-2xl rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Fleet;
