import React, { useState, useEffect, type ReactNode } from 'react';
import { translations } from '../data/translations';
import { LanguageContext } from './LanguageContext';
import type { Language } from '../types/i18n';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('mf_luxury_lang');
        return (saved as Language) || 'IT';
    });

    useEffect(() => {
        localStorage.setItem('mf_luxury_lang', language);
    }, [language]);

    // Simple translation helper
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // Simple translation helper with fallback
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const t = (key: string): any => {
        const keys = key.split('.');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let current: any = translations[language];
        let fallback: any = translations['IT']; // Fallback to IT

        // Traverse both current language and fallback
        for (const k of keys) {
            if (current && current[k] !== undefined) {
                current = current[k];
            } else {
                current = undefined;
            }

            if (fallback && fallback[k] !== undefined) {
                fallback = fallback[k];
            } else {
                fallback = undefined;
            }
        }

        return current || fallback || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
