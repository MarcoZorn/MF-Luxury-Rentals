import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, ArrowLeft } from 'lucide-react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import CarHero from '../components/cars/CarHero';
import CarSpecs from '../components/cars/CarSpecs';
import CarModel3D from '../components/cars/CarModel3D';
import AudioPlayer from '../components/cars/AudioPlayer';
import BookingSidebar from '../components/cars/BookingSidebar';
import { useLanguage } from '../hooks/useLanguage';

const CarDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useLanguage();
    const car = cars.find(c => c.id === id);

    if (!car) {
        return (
            <div className="pt-32 text-center text-white min-h-[60vh] flex flex-col items-center justify-center">
                <p className="text-2xl mb-8">Auto non trovata / Car not found</p>
                <Link to="/fleet">
                    <button className="text-luxury-gold hover:text-white transition-colors flex items-center gap-2 font-bold tracking-widest uppercase text-sm group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        {t('nav.fleet')}
                    </button>
                </Link>
            </div>
        );
    }

    // Similar cars logic (same category, excluding current car)
    const similarCars = cars
        .filter(c => c.categoryKey === car.categoryKey && c.id !== car.id)
        .slice(0, 3);

    const isChiron = car.id === 'bugatti-chiron';

    return (
        <div className={`min-h-screen ${isChiron ? 'bg-black' : 'bg-luxury-black'} text-white pt-20 transition-colors duration-1000`}>
            {isChiron && (
                <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-6 py-2 border border-luxury-gold/50 rounded-full bg-luxury-gold/10 backdrop-blur-md"
                    >
                        <span className="text-luxury-gold text-[10px] font-black tracking-[0.5em] uppercase">
                            EXCLUSIVE HYPERCAR CLUB
                        </span>
                    </motion.div>
                </div>
            )}

            <CarHero image={car.image} backupImage={car.backupImage} name={car.name} />

            <div className="container mx-auto px-6 -mt-20 relative z-10 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`${isChiron ? 'bg-black/80 border-luxury-gold/20' : 'bg-luxury-black/90 border-white/10'} backdrop-blur-xl border p-8 rounded-2xl shadow-2xl mb-12 transition-colors duration-1000`}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                                <div>
                                    <span className="text-luxury-gold font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                                        {isChiron ? 'HYPERCAR' : t(`fleet.categories.${car.categoryKey}`)}
                                    </span>
                                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">{car.name}</h1>
                                </div>
                                <div className="mt-6 md:mt-0 text-left md:text-right">
                                    <p className="text-xl font-bold text-luxury-gold uppercase tracking-wider">
                                        {isChiron ? 'INVITATION ONLY' : t('carCard.customQuote')}
                                    </p>
                                    <p className="text-[10px] text-gray-400 font-normal uppercase tracking-widest mt-2">
                                        {isChiron ? 'PRIVATE CONCIERGE ACCESS' : t('carCard.onRequest')}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light border-l-2 border-luxury-gold pl-8 py-2">
                                {t(`cars.descriptions.${car.descriptionKey}`)}
                            </p>

                            <CarSpecs
                                power={car.specs.power}
                                acceleration={car.specs.acceleration}
                                speed={car.specs.speed}
                                engine={car.specs.engine}
                            />

                            {car.modelUrl && (
                                <CarModel3D modelUrl={car.modelUrl} name={car.name} fallbackImage={car.image} />
                            )}

                            {car.audio && <AudioPlayer src={car.audio} />}

                            {/* Emotional Copy */}
                            <div className={`bg-gradient-to-r ${isChiron ? 'from-luxury-gold/10' : 'from-luxury-gold/5'} to-transparent p-8 rounded-2xl border-l-[6px] border-luxury-gold mt-12`}>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center tracking-wide">
                                    <Crown size={24} className="text-luxury-gold mr-3" />
                                    {isChiron ? 'ECCELLENZA ASSOLUTA' : t('carDetail.sound.title')}
                                </h3>
                                <p className="text-gray-400 leading-relaxed italic opacity-80">
                                    {isChiron
                                        ? 'Un’esperienza che trascende il tempo e lo spazio. Destinata a pochi, sognata da molti.'
                                        : t('carDetail.sound.subtitle')}
                                </p>
                            </div>
                        </motion.div>

                        {/* Similar Cars Section */}
                        {!isChiron && similarCars.length > 0 && (
                            <section className="mt-20">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-3xl font-display font-bold text-white">
                                        {t('featured.tag')} <span className="text-luxury-gold">SIMILI</span>
                                    </h2>
                                    <Link to="/fleet" className="text-xs font-bold tracking-widest text-gray-500 hover:text-luxury-gold transition-colors uppercase border-b border-white/10 pb-1">
                                        {t('featured.viewAll')}
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {similarCars.map((similarCar) => (
                                        <CarCard key={similarCar.id} car={similarCar} />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        {isChiron ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="sticky top-24"
                            >
                                <div className="bg-black border-2 border-luxury-gold/50 p-10 rounded-[3rem] shadow-[0_0_80px_rgba(212,175,55,0.2)] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 via-transparent to-transparent opacity-50" />

                                    <div className="relative z-10 text-center">
                                        <div className="w-20 h-20 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-luxury-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                            <Crown size={40} className="text-luxury-gold" />
                                        </div>
                                        <h3 className="text-3xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                                            VIP ACCESS ONLY
                                        </h3>
                                        <p className="text-gray-400 text-base mb-10 leading-relaxed font-light">
                                            La Bugatti Chiron non è un semplice noleggio. È un privilegio riservato ai nostri clienti più esclusivi. Richiedi un contatto diretto con un nostro operatore per scoprire i termini di accesso al programma Privilege.
                                        </p>

                                        <Link to="/contact?city=bugatti-vip" className="block">
                                            <button className="w-full py-6 bg-luxury-gold text-black font-black tracking-[0.3em] text-xs rounded-2xl shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:shadow-[0_25px_70px_rgba(212,175,55,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] uppercase">
                                                RICHIEDI L'ACCESSO RISERVATO
                                            </button>
                                        </Link>

                                        <div className="mt-12 pt-8 border-t border-white/5">
                                            <p className="text-[10px] text-luxury-gold/60 font-black uppercase tracking-[0.5em]">
                                                MF ITALY PRIVILEGE PROGRAM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <BookingSidebar />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;
