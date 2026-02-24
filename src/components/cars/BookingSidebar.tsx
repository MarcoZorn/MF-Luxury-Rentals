import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Info } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';
import { useLanguage } from '../../hooks/useLanguage';

const BookingSidebar: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        pickup: '',
        dropoff: ''
    });

    const isValid = (field: keyof typeof formData) => {
        if (!formData[field]) return false;
        if (field === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field]);
        if (field === 'phone') return formData[field].length >= 8;
        return formData[field].length > 0;
    };

    const isFormValid = Object.keys(formData).every(key => isValid(key as keyof typeof formData));

    const getInputClass = (field: keyof typeof formData) => {
        const base = "w-full bg-black/50 border rounded-xl p-3.5 text-white focus:outline-none transition-all duration-300";
        if (isValid(field)) {
            return `${base} border-luxury-gold/50 shadow-[0_0_10px_rgba(212,175,55,0.2)]`;
        }
        return `${base} border-white/10 focus:border-luxury-gold`;
    };

    return (
        <div className="lg:col-span-1">
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl sticky top-24"
            >
                <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-wide">{t('carDetail.booking.title')}</h3>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="booking-name">{t('carDetail.booking.name')}</label>
                        <input
                            id="booking-name"
                            type="text"
                            className={getInputClass('name')}
                            placeholder={t('carDetail.booking.name')}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="booking-email">{t('carDetail.booking.email')}</label>
                        <input
                            id="booking-email"
                            type="email"
                            className={getInputClass('email')}
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="booking-phone">{t('carDetail.booking.phone')}</label>
                        <input
                            id="booking-phone"
                            type="tel"
                            className={getInputClass('phone')}
                            placeholder="+39 ..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="pickup-date">{t('carDetail.booking.pickup')}</label>
                            <div className="relative">
                                <input
                                    id="pickup-date"
                                    type="date"
                                    className={getInputClass('pickup')}
                                    value={formData.pickup}
                                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                                />
                                <Calendar size={16} className="absolute right-4 top-4 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2" htmlFor="dropoff-date">{t('carDetail.booking.dropoff')}</label>
                            <div className="relative">
                                <input
                                    id="dropoff-date"
                                    type="date"
                                    className={getInputClass('dropoff')}
                                    value={formData.dropoff}
                                    onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                                />
                                <Calendar size={16} className="absolute right-4 top-4 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button
                            fullWidth
                            size="lg"
                            className={cn(
                                "font-bold tracking-widest py-4 transition-all duration-500",
                                isFormValid ? "shadow-[0_0_25px_rgba(212,175,55,0.4)] bg-luxury-gold text-black border-transparent" : "shadow-[0_10px_30px_rgba(212,175,55,0.1)] opacity-70"
                            )}
                        >
                            {t('carDetail.booking.submit')}
                        </Button>
                        <p className="text-[10px] text-center text-gray-500 mt-6 flex items-center justify-center font-bold uppercase tracking-widest">
                            <Info size={12} className="mr-2 text-luxury-gold" /> {t('carDetail.booking.noPayment')}
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default BookingSidebar;
