import React from 'react';
import { motion } from 'framer-motion';

const Cookies: React.FC = () => {
    return (
        <div className="min-h-screen bg-luxury-black text-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase tracking-tighter">
                        COOKIE POLICY
                    </h1>
                    <p className="text-luxury-gold text-sm font-bold tracking-[0.2em] mb-12">
                        INFORMATIVA ESTESA SUI COOKIE
                    </p>

                    <div className="space-y-12 text-gray-300 font-light leading-relaxed">
                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">1. Cosa sono i Cookie?</h2>
                            <p>
                                I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">2. Tipologie di Cookie Utilizzati</h2>
                            <p>
                                <ul className="list-disc pl-6 space-y-4 mt-4">
                                    <li>
                                        <strong className="text-white">Cookie Tecnici:</strong> Necessari per il corretto funzionamento del sito. Non richiedono il tuo consenso.
                                    </li>
                                    <li>
                                        <strong className="text-white">Cookie Analitici:</strong> Utilizzati per raccogliere informazioni statistiche anonime sull'uso del sito, per aiutarci a migliorarlo.
                                    </li>
                                    <li>
                                        <strong className="text-white">Cookie di Profilazione:</strong> Utilizzati per inviarti messaggi pubblicitari in linea con le tue preferenze. Richiedono il tuo consenso esplicito.
                                    </li>
                                </ul>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-display font-bold mb-4 tracking-wide uppercase text-white">3. Gestione dei Cookie</h2>
                            <p>
                                Puoi gestire le tue preferenze sui cookie direttamente attraverso il banner presente sul sito o tramite le impostazioni del tuo browser. Puoi accettare o rifiutare i cookie di profilazione in qualsiasi momento.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Cookies;
