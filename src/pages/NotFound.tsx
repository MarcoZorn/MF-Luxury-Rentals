import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-luxury-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-luxury-gold/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-luxury-gold/5 blur-[120px] rounded-full" />
            </div>

            <div className="text-center z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-[150px] md:text-[200px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-luxury-gold to-luxury-black leading-none select-none opacity-50">
                        404
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">
                        Pagina Non Trovata
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto font-light leading-relaxed">
                        La destinazione che stai cercando non sembra esistere. <br />
                        Torna alla home per riprendere il tuo viaggio nel lusso.
                    </p>

                    <Link to="/">
                        <button className="bg-luxury-gold text-black px-10 py-4 rounded-full font-bold tracking-widest hover:bg-white transition-colors duration-300 flex items-center gap-3 mx-auto">
                            <Home size={20} />
                            TORNA ALLA HOME
                            <ArrowRight size={20} />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
