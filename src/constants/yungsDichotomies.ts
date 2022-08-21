import { Humanology } from '../types';

export const YUNGS_DICHTOMIES: Record<Humanology.Dichotomy, string> = {
    irrational: 'Иррационал',
    rational: 'Рационал',
    intuit: 'Интуит',
    sensory: 'Сенсорик',
    logic: 'Логик',
    ethic: 'Этик',
    extravert: 'Экстраверт',
    introvert: 'Интроверт',
} as const;
