import { SocionicsType } from '../types';

export const GROUPS: Record<SocionicsType.Psychotype, string> = {
    infantile:  'Инфантил',
    aggressor:  'Агрессор',
    care:       'Заботливый',
    victim:     'Виктим',
} as const;