export type Language = 'IT' | 'EN' | 'AR' | 'FR' | 'RU' | 'ES';

export interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t: (key: string) => any;
}
