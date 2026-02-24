import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen bg-luxury-black text-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase tracking-tighter">
                        PRIVACY POLICY
                    </h1>
                    <p className="text-luxury-gold text-sm font-bold tracking-[0.2em] mb-12">
                        ULTIMO AGGIORNAMENTO: 17/02/2026
                    </p>

                    <div className="space-y-12 text-gray-300 font-light leading-relaxed">
                        <p>
                            La tua privacy è importante per noi. Questa Informativa sulla Privacy spiega come MF Luxury Rentals raccoglie, utilizza e protegge i tuoi dati personali quando visiti il nostro sito web o utilizzi i nostri servizi.
                        </p>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">1. Raccolta dei Dati</h2>
                            <p>
                                Raccogliamo i seguenti dati personali quando prenoti un noleggio o ci contatti:
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Informazioni di contatto (nome, cognome, email, numero di telefono).</li>
                                    <li>Dati della patente di guida e documento d'identità.</li>
                                    <li>Dati di pagamento (elaborati in modo sicuro tramite provider esterni).</li>
                                    <li>Informazioni sulle tue preferenze di noleggio.</li>
                                </ul>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">2. Utilizzo dei Dati</h2>
                            <p>
                                Utilizziamo i tuoi dati per:
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Gestire e confermare le tue prenotazioni.</li>
                                    <li>Fornirti assistenza clienti 24/7.</li>
                                    <li>Inviarti comunicazioni relative al servizio.</li>
                                    <li>Migliorare i nostri servizi e il nostro sito web.</li>
                                    <li>Adempiere agli obblighi legali e fiscali.</li>
                                </ul>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">3. Condivisione dei Dati</h2>
                            <p>
                                Non vendiamo né affittiamo i tuoi dati a terzi. Condividiamo i tuoi dati solo con fornitori di servizi essenziali (es. elaborazione pagamenti, assicurazioni) o quando richiesto dalla legge.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">4. Sicurezza</h2>
                            <p>
                                Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i tuoi dati da accessi non autorizzati, perdite o alterazioni.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">5. I Tuoi Diritti</h2>
                            <p>
                                Hai il diritto di accedere, rettificare o cancellare i tuoi dati personali. Per esercitare questi diritti, contattaci all'indirizzo email fornito sul sito.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
