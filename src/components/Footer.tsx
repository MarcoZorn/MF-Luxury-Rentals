import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import logoMain from '../assets/images/branding/logo_main.png';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    const cities = ['roma', 'milano', 'montecarlo', 'ibiza', 'portocervo', 'cannes', 'barcellona', 'parigi', 'berlino', 'firenze', 'venezia', 'napoli', 'fiumicino', 'fortedeimarmi'];
    const brands = ['Lamborghini', 'Ferrari', 'Porsche', 'Audi', 'Bentley', 'Maserati', 'Mercedes', 'BMW', 'Bugatti'];

    return (
        <footer className="relative bg-luxury-black border-t border-white/10 pt-24 pb-12 overflow-hidden">
            {/* Smudged Watermark Background - Centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.05] flex items-center justify-center overflow-hidden">
                <div className="relative w-[120%] h-[120%] flex items-center justify-center">
                    {/* The "smudge" effect using multiple blurs */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1/2 bg-luxury-gold/5 blur-[150px] rounded-full" />
                    <img
                        src={logoMain}
                        alt=""
                        className="relative w-[40%] rounded-[2rem] shadow-2xl opacity-40 grayscale brightness-150 contrast-125 rotate-[-5deg] smudged-watermark"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link to="/" className="relative z-50 group flex items-start" aria-label="MF Luxury Rentals Home">
                            <img
                                src={logoMain}
                                alt="MF Italy Luxury Rent"
                                className="h-10 object-contain"
                            />
                        </Link>
                        <p className="text-gray-500 font-light leading-relaxed text-xs max-w-sm">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-6">
                            {[
                                { icon: Instagram, label: 'Instagram' },
                                { icon: Facebook, label: 'Facebook' },
                                { icon: Twitter, label: 'Twitter' }
                            ].map((social, i) => (
                                <a
                                    key={social.label + i}
                                    href="#"
                                    className="text-gray-600 hover:text-luxury-gold transition-colors duration-300"
                                    aria-label={`Follow us on ${social.label}`}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Auto per Marca */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px] text-luxury-gold">
                            AUTO PER MARCA
                        </h4>
                        <ul className="grid grid-cols-1 gap-y-4">
                            {brands.map(brand => (
                                <li key={brand}>
                                    <Link to={`/fleet?search=${brand.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors text-xs font-medium tracking-wide">
                                        {brand}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px] text-luxury-gold">
                            {t('footer.locations')}
                        </h4>
                        <ul className="space-y-4">
                            {cities.slice(0, 8).map(city => (
                                <li key={city}>
                                    <Link to={`/contact/${city}`} className="flex items-center text-gray-500 hover:text-white transition-colors text-xs font-medium tracking-wide">
                                        <MapPin size={12} className="text-luxury-gold/50 mr-3" />
                                        {t(`locations.cities.${city}`)} {city === 'roma' && '(HQ)'}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px] text-luxury-gold">
                            {t('footer.contact')}
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-center text-gray-400 group">
                                <a href="tel:+393206144070" className="flex items-center hover:text-luxury-gold transition-colors">
                                    <Phone size={14} className="text-luxury-gold mr-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-medium tracking-wide">+39 3206144070</span>
                                </a>
                            </li>
                            <li className="flex items-center text-gray-400 group">
                                <a href="mailto:info@mfitalyluxuryrent.it" className="flex items-center hover:text-luxury-gold transition-colors">
                                    <Mail size={14} className="text-luxury-gold mr-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-medium tracking-wide">info@mfitalyluxuryrent.it</span>
                                </a>
                            </li>
                            <li className="pt-4">
                                <p className="text-gray-600 text-[9px] font-bold tracking-widest uppercase">MF Italy Luxury Rent S.r.l.</p>
                                <p className="text-gray-600 text-[9px] font-bold tracking-widest uppercase mt-1">P.IVA 18122731005</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em]">
                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} MF Luxury Rentals. {t('footer.rights')}</p>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="hover:text-luxury-gold transition-all duration-300">{t('footer.privacy')}</Link>
                        <Link to="/terms" className="hover:text-luxury-gold transition-all duration-300">{t('footer.terms')}</Link>
                        <Link to="/cookies" className="hover:text-luxury-gold transition-all duration-300">{t('footer.cookies')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
