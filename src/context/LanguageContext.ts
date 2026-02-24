import { createContext } from 'react';
import type { LanguageContextType } from '../types/i18n';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export { LanguageContext };
