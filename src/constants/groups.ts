import { Humanology } from '../types';

export const GROUPS: Record<Humanology.Psychotype, string> = {
    infantile:  'Инфантил',
    aggressor:  'Агрессор',
    care:       'Заботливый',
    victim:     'Виктим',
} as const;
