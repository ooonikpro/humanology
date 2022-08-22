import { Socionics } from '../types';

export const GROUPS: Record<Socionics.Psychotype, string> = {
    infantile: 'Инфантил',
    aggressor: 'Агрессор',
    care: 'Заботливый',
    victim: 'Виктим',
} as const;
