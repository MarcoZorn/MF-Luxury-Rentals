import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface AudioPlayerProps {
    src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
    const { t } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element
        const audio = new Audio();
        audio.preload = 'none';

        audio.onended = () => setIsPlaying(false);
        audio.onerror = () => {
            setHasError(true);
            setIsPlaying(false);
            setIsLoading(false);
        };
        audio.oncanplaythrough = () => {
            setIsLoading(false);
        };
        audio.onwaiting = () => setIsLoading(true);
        audio.onplaying = () => setIsLoading(false);

        audio.src = src;
        audioRef.current = audio;

        return () => {
            audio.pause();
            audio.src = '';
            audioRef.current = null;
        };
    }, [src]);

    const togglePlay = async () => {
        if (!audioRef.current || hasError) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            setIsLoading(true);
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch {
                setHasError(true);
                setIsLoading(false);
            }
        }
    };

    // Don't render if there's a persistent error
    if (hasError) return null;

    return (
        <div className="mt-8 mb-12 p-8 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] border border-white/10 backdrop-blur-xl flex items-center justify-between relative overflow-hidden group">
            {/* Visual Pulse Effect */}
            {isPlaying && (
                <div className="absolute inset-0 bg-luxury-gold/5 animate-pulse pointer-events-none" />
            )}

            <div className="relative z-10 flex items-center">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-6 transition-all duration-500 ${isPlaying ? 'bg-luxury-gold text-black rotate-12' : 'bg-white/5 text-luxury-gold'}`}>
                    <Volume2 size={24} className={isPlaying ? 'animate-bounce' : ''} />
                </div>
                <div>
                    <h4 className="text-white font-display font-bold mb-1 uppercase tracking-[0.2em] text-sm group-hover:text-luxury-gold transition-colors">
                        {t('carDetail.sound.title')}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest opacity-60">
                        {t('carDetail.sound.subtitle')}
                    </p>
                </div>
            </div>

            <button
                onClick={togglePlay}
                disabled={isLoading}
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 shadow-2xl ${isPlaying
                    ? 'bg-luxury-gold text-black scale-110 shadow-[0_0_30px_rgba(212,175,55,0.4)]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-luxury-gold/50'
                    } ${isLoading ? 'opacity-50 cursor-wait' : ''}`}
                aria-label={isPlaying ? "Pause Engine Sound" : "Play Engine Sound"}
            >
                {isLoading ? (
                    <div className="w-6 h-6 border-2 border-luxury-gold/30 border-t-luxury-gold rounded-full animate-spin" />
                ) : isPlaying ? (
                    <Pause size={28} fill="currentColor" />
                ) : (
                    <Play size={28} className="ml-1" fill="currentColor" />
                )}
            </button>
        </div>
    );
};

export default AudioPlayer;
