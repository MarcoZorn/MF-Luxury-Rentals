import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import MapComponent from '../ui/MapComponent';
import { locations } from '../../data/locations';

const LocationsMap: React.FC = () => {
    const { t } = useLanguage();

    const mapMarkers = locations.map(loc => ({
        id: loc.city.toLowerCase(),
        position: loc.coords,
        title: loc.city,
        address: loc.address
    }));

    return (
        <div className="relative w-full h-[600px] bg-luxury-black border border-white/5 rounded-3xl overflow-hidden shadow-2xl group/map">
            <MapComponent
                center={[35.0, 0]} // Global view center
                zoom={3}
                markers={mapMarkers}
            />

            {/* Map UI Decorations */}
            <div className="absolute top-6 left-6 z-[1000] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <span className="text-[10px] text-luxury-gold font-bold tracking-[0.3em] uppercase block mb-1">{t('locations.mapTitle')}</span>
                <h3 className="text-white font-display font-bold tracking-widest leading-none">{t('locations.mapNetwork')}</h3>
            </div>

            <div className="absolute bottom-6 left-6 z-[1000] flex space-x-4">
                <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] text-white/90 font-bold tracking-wider uppercase">Live Operations: Active</span>
                </div>
            </div>
        </div>
    );
};

export default LocationsMap;
