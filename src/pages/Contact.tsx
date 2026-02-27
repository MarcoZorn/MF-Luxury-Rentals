import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import { useParams } from 'react-router-dom';
import { locations } from '../data/locations';
import { useLanguage } from '../hooks/useLanguage';
import MapComponent from '../components/ui/MapComponent';

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const { city } = useParams<{ city: string }>();

    const isVip = city === 'bugatti-vip';

    // Find the specific location data, or default to Rome (first one)
    const activeLocation = city && !isVip
        ? locations.find(l => l.id === city.toLowerCase()) || locations[0]
        : locations[0]; // Default to HQ

    const cityKey = activeLocation.id;

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [city]);

    const branchMarker = [{
        id: cityKey,
        position: activeLocation.coords,
        title: activeLocation.city,
        address: activeLocation.address
    }];

    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
    };

    if (isVip) {
        return (
            <div className="min-h-screen bg-black text-white pt-32 pb-24 overflow-hidden relative">
                {/* VIP Ambient Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('../assets/images/ui/vip-bg.jpg')] bg-cover bg-fixed opacity-20 grayscale contrast-150 rotate-1 scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-[1px] bg-luxury-gold mx-auto mb-10"
                        />
                        <span className="text-luxury-gold font-bold tracking-[0.6em] uppercase mb-6 block text-[10px]">
                            {t('contactPage.vip.tag')}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter uppercase">
                            {t('contactPage.vip.titleMain')} <br />
                            <span className="text-luxury-gold italic">{t('contactPage.vip.titleVip')}</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed border-t border-white/10 pt-8 mt-4">
                            {t('contactPage.vip.subtitle')}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-black/40 backdrop-blur-3xl border border-luxury-gold/20 p-12 md:p-20 rounded-[3rem] shadow-[0_0_100px_rgba(212,175,55,0.1)] relative"
                    >
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-24 h-24 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-8 border border-luxury-gold">
                                    <Send size={40} className="text-luxury-gold" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tighter">{t('contactPage.vip.formTitle')}</h3>
                                <p className="text-gray-400 max-w-md mx-auto">
                                    {t('contactPage.vip.formSubtitle')}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="relative group">
                                        <label className="block text-[10px] font-black text-luxury-gold tracking-[0.4em] uppercase mb-4 opacity-70 group-focus-within:opacity-100 transition-opacity" htmlFor="vip-name">
                                            {t('contactPage.vip.name')}
                                        </label>
                                        <input
                                            id="vip-name"
                                            type="text"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold focus:outline-none py-4 text-2xl font-light text-white transition-all placeholder:text-white/5"
                                            placeholder="Johnathan Doe"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <label className="block text-[10px] font-black text-luxury-gold tracking-[0.4em] uppercase mb-4 opacity-70 group-focus-within:opacity-100 transition-opacity" htmlFor="vip-phone">
                                            {t('contactPage.phone')}
                                        </label>
                                        <input
                                            id="vip-phone"
                                            type="tel"
                                            required
                                            className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold focus:outline-none py-4 text-2xl font-light text-white transition-all placeholder:text-white/5"
                                            placeholder="+39 ..."
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <label className="block text-[10px] font-black text-luxury-gold tracking-[0.4em] uppercase mb-4 opacity-70 group-focus-within:opacity-100 transition-opacity" htmlFor="vip-motivation">
                                        {t('contactPage.message')}
                                    </label>
                                    <textarea
                                        id="vip-motivation"
                                        rows={3}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold focus:outline-none py-4 text-xl font-light text-white transition-all resize-none placeholder:text-white/5"
                                        placeholder={t('contactPage.placeholderMessage')}
                                    ></textarea>
                                </div>

                                <div className="pt-10 flex justify-center">
                                    <button
                                        type="submit"
                                        className="px-16 py-6 bg-luxury-gold text-black font-black tracking-[0.3em] text-[10px] rounded-full shadow-[0_20px_60px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_80px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 uppercase"
                                    >
                                        {t('contactPage.sendBtn')} {t('contactPage.hq')}
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>

                    <div className="mt-20 text-center opacity-30">
                        <p className="text-[10px] font-black tracking-[0.8em] text-white uppercase">
                            MF ITALY PRIVILEGE PROGRAM &copy; MMXXIV
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-luxury-black text-white pt-20 pb-24">
            {/* Visual Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] mb-24 overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    src={activeLocation.image}
                    alt={activeLocation.city}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-luxury-black" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-luxury-gold font-bold tracking-[0.4em] uppercase mb-4 block text-xs">
                            {city ? `${t('locations.contactBranch')} ${t(`locations.cities.${cityKey}`)}` : t('contactPage.heroTag')}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter uppercase whitespace-nowrap">
                            {city ? t(`locations.cities.${cityKey}`) : t('contactPage.heroTitle')}
                        </h1>
                        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                            {t('contactPage.heroSubtitle')} {city && `${t(`locations.cities.${cityKey}`)}`}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Dynamic Location Map */}
                        <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden border border-white/5 group shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                            <MapComponent
                                center={activeLocation.coords}
                                zoom={15} // Exact city-center pinpoint zoom level
                                markers={branchMarker}
                            />
                            <div className="absolute bottom-10 left-10 z-[1000] pointer-events-none">
                                <h3 className="text-3xl font-display font-bold text-white mb-2 uppercase tracking-wide drop-shadow-lg">
                                    {t(`locations.cities.${cityKey}`)} {cityKey === 'roma' || cityKey === 'milano' ? 'HQ' : 'BRANCH'}
                                </h3>
                                <p className="text-gray-300 font-light tracking-wide drop-shadow-md">{activeLocation.address}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#0A0A0A] p-10 rounded-[2rem] border border-white/5">
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-luxury-gold/10 p-4 rounded-2xl mr-5">
                                        <Phone className="text-luxury-gold" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-sm text-gray-500 mb-1 uppercase tracking-widest">{t('contactPage.phone')}</h4>
                                        <p className="text-white font-bold">
                                            <a href="tel:+393206144070" className="hover:text-luxury-gold transition-colors">+39 3206144070</a>
                                        </p>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">{t('contactPage.support')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-luxury-gold/10 p-4 rounded-2xl mr-5">
                                        <Mail className="text-luxury-gold" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-sm text-gray-500 mb-1 uppercase tracking-widest">Email</h4>
                                        <p className="text-white font-bold">
                                            <a href="mailto:info@mfitalyluxuryrent.it" className="hover:text-luxury-gold transition-colors">info@mfitalyluxuryrent.it</a>
                                        </p>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">{t('contactPage.response')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-luxury-gold/10 p-4 rounded-2xl mr-5">
                                        <MapPin className="text-luxury-gold" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-sm text-gray-500 mb-1 uppercase tracking-widest">{t('contactPage.branch')}</h4>
                                        <p className="text-white font-bold">{t(`locations.cities.${cityKey}`)}</p>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                                            {['roma', 'milano', 'portocervo', 'firenze', 'venezia', 'napoli', 'fiumicino', 'fortedeimarmi'].includes(cityKey) ? 'ITALIA' : 'EUROPA'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-luxury-gold/10 p-4 rounded-2xl mr-5">
                                        <Clock className="text-luxury-gold" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-sm text-gray-500 mb-1 uppercase tracking-widest">{t('contactPage.hours')}</h4>
                                        <p className="text-white font-bold">09:00 - 22:00</p>
                                        <p className="text-luxury-gold text-[10px] font-bold mt-1 tracking-widest uppercase">{t('contactPage.delivery')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl z-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                        <Send size={32} className="text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-4">MESSAGGIO INVIATO</h3>
                                    <p className="text-gray-400">Grazie per averci contattato.<br />Il nostro team ti risponderà al più presto.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-3xl font-display font-bold mb-10 tracking-tight">{t('contactPage.formTitle')}</h3>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <label className="block text-[10px] font-bold text-luxury-gold tracking-[0.2em] uppercase mb-2" htmlFor="first-name">{t('contactPage.name')}</label>
                                                <input id="first-name" type="text" required className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold focus:outline-none py-3 text-white transition-colors" placeholder={t('contactPage.placeholderName')} />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold text-luxury-gold tracking-[0.2em] uppercase mb-2" htmlFor="last-name">{t('contactPage.surname')}</label>
                                                <input id="last-name" type="text" required className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold focus:outline-none py-3 text-white transition-colors" placeholder={t('contactPage.placeholderSurname')} />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-bold text-luxury-gold tracking-[0.2em] uppercase mb-2" htmlFor="contact-email">{t('contactPage.email')}</label>
                                            <input id="contact-email" type="email" required className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold focus:outline-none py-3 text-white transition-colors" placeholder={t('contactPage.placeholderEmail')} />
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-bold text-luxury-gold tracking-[0.2em] uppercase mb-2" htmlFor="location">{t('carDetail.booking.pickup')}</label>
                                            <input
                                                id="location"
                                                type="text"
                                                required
                                                className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold focus:outline-none py-3 text-white transition-colors"
                                                placeholder="Roma, Milano, Ibiza..."
                                                defaultValue={city ? t(`locations.cities.${cityKey}`) : ''}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-bold text-luxury-gold tracking-[0.2em] uppercase mb-2" htmlFor="contact-message">{t('contactPage.message')}</label>
                                            <textarea
                                                id="contact-message"
                                                rows={4}
                                                required
                                                className="w-full bg-transparent border-b border-white/10 focus:border-luxury-gold focus:outline-none py-3 text-white transition-colors resize-none"
                                                placeholder={city ? `${t('contactPage.placeholderMessage')} ${t(`locations.cities.${cityKey}`)}...` : t('contactPage.placeholderMessage')}
                                            ></textarea>
                                        </div>

                                        <div className="pt-6">
                                            <Button type="submit" fullWidth size="lg" className="shadow-[0_20px_40px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.4)] transition-all font-bold tracking-[0.2em] py-5">
                                                {t('contactPage.sendBtn')} {t(`locations.cities.${cityKey}`)} <Send size={18} className="ml-3" />
                                            </Button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Decorative Detail Image */}
                        <div className="mt-8 rounded-[2.5rem] overflow-hidden h-48 border border-white/5 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80"
                                alt="Luxury Detail"
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
