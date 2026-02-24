import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-luxury-black text-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase tracking-tighter">
                        TERMINI E CONDIZIONI
                    </h1>
                    <p className="text-luxury-gold text-sm font-bold tracking-[0.2em] mb-12">
                        TERMINI DI UTILIZZO DEL SERVIZIO
                    </p>

                    <div className="space-y-12 text-gray-300 font-light leading-relaxed">
                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">1. Requisiti di Noleggio</h2>
                            <p>
                                Per noleggiare un veicolo con MF Luxury Rentals, il conducente deve avere almeno 21 anni (25 per alcune categorie di Supercar) e possedere una patente di guida valida da almeno 3 anni.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">2. Prenotazione e Pagamento</h2>
                            <p>
                                La prenotazione è confermata solo al ricevimento del pagamento o di un deposito cauzionale. Accettiamo carte di credito e bonifici bancari. Il saldo deve essere effettuato prima della consegna del veicolo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">3. Deposito Cauzionale</h2>
                            <p>
                                È richiesto un deposito cauzionale al momento del ritiro del veicolo, bloccato su carta di credito. L'importo varia in base al modello dell'auto e sarà sbloccato al termine del noleggio, previa verifica delle condizioni del veicolo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">4. Utilizzo del Veicolo</h2>
                            <p>
                                Il veicolo deve essere utilizzato con la dovuta diligenza e nel rispetto del Codice della Strada. È vietato l'uso in pista, per competizioni o su strade non asfaltate, salvo specifica autorizzazione scritta.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">5. Assicurazione</h2>
                            <p>
                                Le nostre tariffe includono l'assicurazione standard. Coperture aggiuntive per ridurre la franchigia in caso di danni o furto sono disponibili su richiesta.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">6. Consegna e Restituzione</h2>
                            <p>
                                Offriamo servizi di consegna e ritiro in tutta Italia e Europa. Eventuali ritardi nella restituzione oltre l'orario concordato potrebbero comportare l'addebito di costi aggiuntivi.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
