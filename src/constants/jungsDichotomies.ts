import { Humanology } from '../types';

export const JUNGS_DICHTOMIES: Record<Humanology.Dichotomie, string> = {
    intuit: 'Интуит',
    sensoric: 'Сенсорик',
    logic: 'Логик',
    etic: 'Этик',
    extravert: 'Экстраверт',
    introvert: 'Интроверт',
    irrational: 'Иррационал',
    rational: 'Рационал',
} as const;
