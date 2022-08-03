import { SocionicsType } from '../types';

export const TAROT: Record<SocionicsType.Tarot, string> = {
    swords:     'Мечи',
    pentacles:  'Пентакли',
    cups:       'Кубки',
    wands:      'Посохи',
} as const;