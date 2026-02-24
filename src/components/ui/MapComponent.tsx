import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet + React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// Custom Luxury Marker Icon
const luxuryIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

interface MapMarker {
    id: string;
    position: [number, number];
    title: string;
    address?: string;
}

interface MapComponentProps {
    center: [number, number];
    zoom: number;
    markers: MapMarker[];
    className?: string;
}

// Helper component to update map view when props change
const RecenterMap: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
    const map = useMap();
    React.useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
};

const MapComponent: React.FC<MapComponentProps> = ({ center, zoom, markers, className }) => {
    return (
        <div className={`relative w-full h-full rounded-3xl overflow-hidden border border-white/10 ${className}`}>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                className="w-full h-full"
                style={{ background: '#050505' }}
            >
                <TileLayer
                    attribution=''
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <RecenterMap center={center} zoom={zoom} />
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={marker.position}
                        icon={luxuryIcon}
                    >
                        <Popup className="luxury-popup">
                            <div className="p-2">
                                <h4 className="font-display font-bold text-black uppercase tracking-wider">{marker.title}</h4>
                                {marker.address && <p className="text-xs text-gray-600 mt-1">{marker.address}</p>}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
