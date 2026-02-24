import firenzeImage from '../assets/images/locations/firenze.avif';

export const locations = [
    {
        id: 'roma',
        city: 'ROMA',
        address: 'Via Vittorio Veneto, 121',
        coords: [41.9062, 12.4897] as [number, number],
        phone: '+39 06 1234567',
        email: 'roma@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
        desc: 'Il cuore del nostro impero. Showroom esclusivo nel centro della Dolce Vita.'
    },
    {
        id: 'milano',
        city: 'MILANO',
        address: 'Via Montenapoleone, 8',
        coords: [45.4642, 9.1900] as [number, number],
        phone: '+39 02 7654321',
        email: 'milano@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800&q=80',
        desc: 'Fashion District HQ. Perfetto per business trip e fashion week.'
    },
    {
        id: 'ibiza',
        city: 'IBIZA',
        address: 'Marina Botafoch, Ibiza',
        coords: [38.9067, 1.4206] as [number, number],
        phone: '+34 971 12 34 56',
        email: 'ibiza@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80',
        desc: 'L\'isola che non dorme mai. Cabriolet e SUV per ogni party.'
    },
    {
        id: 'portocervo',
        city: 'PORTO CERVO',
        address: 'Promenade du Port',
        coords: [41.1331, 9.5303] as [number, number],
        phone: '+39 0789 123456',
        email: 'portocervo@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        desc: 'Esclusività in Costa Smeralda.'
    },
    {
        id: 'cannes',
        city: 'CANNES',
        address: 'La Croisette',
        coords: [43.5528, 7.0174] as [number, number],
        phone: '+33 4 93 12 34 56',
        email: 'cannes@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80',
        desc: 'Il cinema, il mare, il lusso.'
    },
    {
        id: 'montecarlo',
        city: 'MONTECARLO',
        address: 'Place du Casino, 1',
        coords: [43.7384, 7.4246] as [number, number],
        phone: '+377 99 88 77 66',
        email: 'montecarlo@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80', // Monaco Skyline Dusk
        desc: 'Dove il lusso non ha limiti. Consegna yacht-side disponibile.'
    },
    {
        id: 'barcellona',
        city: 'BARCELLONA',
        address: 'Passeig de Gràcia',
        coords: [41.3851, 2.1734] as [number, number],
        phone: '+34 93 123 45 67',
        email: 'barcelona@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
        desc: 'Architettura e movida.'
    },
    {
        id: 'parigi',
        city: 'PARIGI',
        address: 'Champs-Élysées',
        coords: [48.8566, 2.3522] as [number, number],
        phone: '+33 1 23 45 67 89',
        email: 'paris@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
        desc: 'La Ville Lumière.'
    },
    {
        id: 'berlino',
        city: 'BERLINO',
        address: 'Kurfürstendamm',
        coords: [52.5200, 13.4050] as [number, number],
        phone: '+49 30 12345678',
        email: 'berlin@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
        desc: 'Avanguardia pura.'
    },
    {
        id: 'firenze',
        city: 'FIRENZE',
        address: 'Via de\' Tornabuoni',
        coords: [43.7696, 11.2558] as [number, number],
        phone: '+39 055 1234567',
        email: 'firenze@mfluxury.com',
        image: firenzeImage,
        desc: 'Rinascimento su strada.'
    },
    {
        id: 'venezia',
        city: 'VENEZIA',
        address: 'Piazzale Roma',
        coords: [45.4408, 12.3155] as [number, number],
        phone: '+39 041 1234567',
        email: 'venezia@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=800&q=80',
        desc: 'Romantica ed eterna.'
    },
    {
        id: 'napoli',
        city: 'NAPOLI',
        address: 'Via dei Mille',
        coords: [40.8518, 14.2681] as [number, number],
        phone: '+39 081 1234567',
        email: 'napoli@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
        desc: 'Passione mediterranea.'
    },
    {
        id: 'fiumicino',
        city: 'AEROPORTO FIUMICINO',
        address: 'Terminal T3',
        coords: [41.7999, 12.2462] as [number, number],
        phone: '+39 06 65951',
        email: 'fco@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
        desc: 'Appena atterrati, subito in pista.'
    },
    {
        id: 'fortedeimarmi',
        city: 'FORTE DEI MARMI',
        address: 'Via Carducci',
        coords: [43.9587, 10.1685] as [number, number],
        phone: '+39 0584 123456',
        email: 'forte@mfluxury.com',
        image: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80',
        desc: 'Lusso in Versilia.'
    }
];
