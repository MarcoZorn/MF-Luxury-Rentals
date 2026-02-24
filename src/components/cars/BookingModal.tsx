import React, { useState } from 'react';
import { X, Calendar, MapPin, User, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    carName?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, carName }) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pickupDate: '',
        dropoffDate: '',
        pickupLocation: '',
        message: ''
    });

    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    pickupDate: '',
                    dropoffDate: '',
                    pickupLocation: '',
                    message: ''
                });
            }, 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-luxury-black border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>

                            {isSuccess ? (
                                <div className="p-20 text-center">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-4">RICHIESTA INVIATA</h3>
                                    <p className="text-gray-400">La tua richiesta è stata ricevuta con successo.<br />Un nostro Luxury Manager ti contatterà a breve.</p>
                                </div>
                            ) : (
                                <>
                                    {/* Header */}
                                    <div className="p-8 border-b border-white/5">
                                        <h2 className="text-3xl font-display font-bold text-white mb-2">
                                            {t('carDetail.booking.title')}
                                        </h2>
                                        {carName && (
                                            <p className="text-luxury-gold font-bold tracking-wider">{carName}</p>
                                        )}
                                        <p className="text-gray-400 text-sm mt-4">
                                            {t('carDetail.booking.noPayment')}
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2">
                                                <User size={16} className="inline mr-2" />
                                                {t('carDetail.booking.name')}
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold/50 transition-colors"
                                                placeholder="Mario Rossi"
                                            />
                                        </div>

                                        {/* Email & Phone */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-300 mb-2">
                                                    <Mail size={16} className="inline mr-2" />
                                                    {t('carDetail.booking.email')}
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold/50 transition-colors"
                                                    placeholder="mario@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-300 mb-2">
                                                    <Phone size={16} className="inline mr-2" />
                                                    {t('carDetail.booking.phone')}
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold/50 transition-colors"
                                                    placeholder="+39 123 456 7890"
                                                />
                                            </div>
                                        </div>

                                        {/* Pickup & Dropoff Dates */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-300 mb-2">
                                                    <Calendar size={16} className="inline mr-2" />
                                                    {t('carDetail.booking.pickup')}
                                                </label>
                                                <input
                                                    type="date"
                                                    name="pickupDate"
                                                    value={formData.pickupDate}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold/50 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-300 mb-2">
                                                    <Calendar size={16} className="inline mr-2" />
                                                    {t('carDetail.booking.dropoff')}
                                                </label>
                                                <input
                                                    type="date"
                                                    name="dropoffDate"
                                                    value={formData.dropoffDate}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold/50 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Pickup Location */}
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2">
                                                <MapPin size={16} className="inline mr-2" />
                                                Luogo di Ritiro
                                            </label>
                                            <input
                                                type="text"
                                                name="pickupLocation"
                                                value={formData.pickupLocation}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold/50 transition-colors"
                                                placeholder="Roma, Milano, Aeroporto..."
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-sm font-bold text-gray-300 mb-2">
                                                Note Aggiuntive (Opzionale)
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={3}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luxury-gold/50 transition-colors resize-none"
                                                placeholder="Richieste speciali, preferenze..."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            fullWidth
                                            size="lg"
                                            className="mt-8"
                                        >
                                            {t('carDetail.booking.submit')}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
