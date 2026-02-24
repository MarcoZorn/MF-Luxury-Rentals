import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import { useLanguage } from '../hooks/useLanguage';
import fleetHero from '../assets/images/ui/fleet-hero.jpg';
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
        { label: t('fleet.sortOptions.priceAsc'), value: "priceAsc" },
        { label: t('fleet.sortOptions.priceDesc'), value: "priceDesc" },
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
                {/* Exclusive Bugatti Entry */}
                {chironCar && !searchQuery && selectedCategory === "TUTTE" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-32 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 via-transparent to-luxury-gold/20 blur-[100px] opacity-30 pointer-events-none" />
                        <Link to={`/cars/${chironCar.id}`} className="block">
                            <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] overflow-hidden border border-luxury-gold/30 hover:border-luxury-gold transition-all duration-700 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative shadow-2xl">
                                <div className="absolute top-10 right-10 bg-luxury-gold text-black px-6 py-2 rounded-full font-black text-[10px] tracking-[0.3em] uppercase animate-pulse">
                                    HYPERCAR CLUB
                                </div>
                                <div className="w-full lg:w-3/5 aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                                    <img
                                        src={chironCar.image}
                                        alt={chironCar.name}
                                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>
                                <div className="w-full lg:w-2/5 flex flex-col items-start">
                                    <span className="text-luxury-gold font-bold tracking-[0.5em] uppercase mb-6 text-[10px]">THE PINNACLE</span>
                                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter uppercase leading-tight">
                                        {chironCar.name}
                                    </h2>
                                    <div className="grid grid-cols-2 gap-8 mb-10 w-full">
                                        <div>
                                            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Power</p>
                                            <p className="text-white font-bold text-xl">{chironCar.specs.power}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">0-100 km/h</p>
                                            <p className="text-white font-bold text-xl">{chironCar.specs.acceleration}</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-px bg-white/10 mb-10" />
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <p className="text-luxury-gold font-black text-2xl tracking-tighter uppercase">{t('carCard.onRequest')}</p>
                                        </div>
                                        <div className="bg-luxury-gold/10 border border-luxury-gold/50 text-luxury-gold px-10 py-4 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase group-hover:bg-luxury-gold group-hover:text-black transition-all">
                                            {t('carCard.details')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

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
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-luxury-gold/50 appearance-none cursor-pointer"
                                    aria-label={t('fleet.sortBy')}
                                >
                                    {sortOptions.map(opt => (
                                        <option key={opt.value} value={opt.value} className="bg-luxury-black text-white">{opt.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                {processedCars.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
            </div>
        </div>
    );
};

export default Fleet;
