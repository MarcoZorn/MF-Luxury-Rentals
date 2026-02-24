import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCollection from '../components/home/FeaturedCollection';
import Guarantee from '../components/home/Guarantee';
import WhyChooseUs from '../components/home/WhyChooseUs';
import LocationsTeaser from '../components/home/LocationsTeaser';
import heroPoster from '../assets/images/ui/hero-poster.png';
import locationsTeaser from '../assets/images/ui/locations-teaser.jpg';

const Home: React.FC = () => {
    return (
        <div className="bg-luxury-black text-white">
            <Hero poster={heroPoster} />
            <FeaturedCollection />
            <Guarantee />
            <WhyChooseUs />
            <LocationsTeaser backgroundImage={locationsTeaser} />
        </div>
    );
};

export default Home;
