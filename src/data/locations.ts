
import romaHero from '../assets/images/locations/roma.jpg';
import milanoHero from '../assets/images/locations/milano.jpg';
import ibizaHero from '../assets/images/locations/ibiza.jpg';
import portoCervoHero from '../assets/images/locations/portocervo.jpg';
import cannesHero from '../assets/images/locations/cannes.jpg';
import montecarloHero from '../assets/images/locations/montecarlo.jpg';
import barcelonaHero from '../assets/images/locations/barcelona.jpg';
import parisHero from '../assets/images/locations/paris.jpg';
import berlinHero from '../assets/images/locations/berlin.jpg';
import firenzeHero from '../assets/images/locations/firenze.jpg';
import fiumicinoHero from '../assets/images/locations/fiumicino.jpg';
import fortedeimarmiHero from '../assets/images/locations/fortedeimarmi.jpg';
import miamiHero from '../assets/images/locations/miami.jpg';

// Locations data with premium local assets
export const locations = [
    {
        id: 'roma',
        city: 'ROMA HQ',
        address: 'Via Vittorio Veneto, 121',
        coords: [41.9062, 12.4897] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: romaHero,
        fallbackImage: romaHero,
        desc: 'Il cuore pulsante del nostro impero nel centro della Dolce Vita. Uno showroom d\'élite dove la maestosità di Roma incontra l\'eccellenza delle nostre Supercar.'
    },
    {
        id: 'milano',
        city: 'MILANO LOUNGE',
        address: 'Via Montenapoleone, 8',
        coords: [45.4642, 9.1900] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: milanoHero,
        fallbackImage: milanoHero,
        desc: 'Il Fashion District milanese incontra la potenza ingegneristica. La nostra lounge privata per un business d\'alta classe e uno stile senza tempo.'
    },
    {
        id: 'ibiza',
        city: 'IBIZA BRANCH',
        address: 'Marina Botafoch, Ibiza',
        coords: [38.9067, 1.4206] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: ibizaHero,
        fallbackImage: ibizaHero,
        desc: 'L\'isola dell\'esclusività assoluta. SUV e Cabriolet di lusso per dominare le notti più prestigiose e i tramonti mozzafiato del Mediterraneo.'
    },
    {
        id: 'portocervo',
        city: 'PORTO CERVO BRANCH',
        address: 'Promenade du Port',
        coords: [41.1331, 9.5303] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: portoCervoHero,
        fallbackImage: portoCervoHero,
        desc: 'Lusso senza confini nella magica cornice della Costa Smeralda. Eleganza vista mare e servizi concierge su misura per chi abita l\'eccellenza.'
    },
    {
        id: 'cannes',
        city: 'CANNES',
        address: 'La Croisette',
        coords: [43.5528, 7.0174] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: cannesHero,
        fallbackImage: cannesHero,
        desc: 'Il fascino della Croisette e lo stile inconfondibile di MF. Per chi sceglie solo l\'eccellenza sulla Costa Azzurra.'
    },
    {
        id: 'montecarlo',
        city: 'MONTECARLO EXCLUSIVE',
        address: 'Place du Casino, 1',
        coords: [43.7384, 7.4246] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: montecarloHero,
        fallbackImage: montecarloHero,
        desc: 'L\'apice del lusso mondiale. Consegna esclusiva yacht-side, assistenza VIP e le Supercar più desiderate nel cuore del Principato.'
    },
    {
        id: 'barcellona',
        city: 'BARCELLONA BRANCH',
        address: 'Passeig de Gràcia',
        coords: [41.3851, 2.1734] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: barcelonaHero,
        fallbackImage: barcelonaHero,
        desc: 'Vivacità mediterranea e architettura iconica incontrano il prestigio della nostra flotta esclusiva per un\'esperienza catalana senza pari.'
    },
    {
        id: 'parigi',
        city: 'PARIGI BRANCH',
        address: 'Champs-Élysées',
        coords: [48.8566, 2.3522] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: parisHero,
        fallbackImage: parisHero,
        desc: 'La Ville Lumière vissuta con l\'eleganza suprema delle nostre Supercar. Il lusso parigino firmato MF.'
    },
    {
        id: 'berlino',
        city: 'BERLINO',
        address: 'Kurfürstendamm',
        coords: [52.5200, 13.4050] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: berlinHero,
        fallbackImage: berlinHero,
        desc: 'Tecnologia d\'avanguardia e performance pura per esplorare la dinamica capitale tedesca.'
    },
    {
        id: 'firenze',
        city: 'FIRENZE ART LOUNGE',
        address: 'Via de\' Tornabuoni',
        coords: [43.7696, 11.2558] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: firenzeHero,
        fallbackImage: firenzeHero,
        desc: 'Il Rinascimento dell\'automobile. Esplora le colline toscane con la nobiltà e le performance delle nostre vetture più iconiche.'
    },
    {
        id: 'fiumicino',
        city: 'AEROPORTO FIUMICINO',
        address: 'Terminal T3',
        coords: [41.7999, 12.2462] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: fiumicinoHero,
        fallbackImage: fiumicinoHero,
        desc: 'Il tuo viaggio d\'élite inizia al gate. Servizio meet-and-greet personalizzato e consegna immediata per non perdere neanche un secondo.'
    },
    {
        id: 'fortedeimarmi',
        city: 'FORTE DEI MARMI BRANCH',
        address: 'Via Carducci',
        coords: [43.9587, 10.1685] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: fortedeimarmiHero,
        fallbackImage: fortedeimarmiHero,
        desc: 'L\'essenza della Versilia Exclusive. Cabriolet di lusso e Super Suv per le tue estati nel cuore del glamour italiano più autentico.'
    },
    {
        id: 'miami',
        city: 'MIAMI HQ',
        address: 'Ocean Drive, South Beach',
        coords: [25.7617, -80.1918] as [number, number],
        phone: '+39 3206144070',
        email: 'info@mfitalyluxuryrent.it',
        image: miamiHero,
        fallbackImage: miamiHero,
        desc: 'L\'eccellenza MF sbarca negli Stati Uniti. Il lusso di Miami vissuto con lo stile inconfondibile del nostro showroom d\'élite.'
    }
];
