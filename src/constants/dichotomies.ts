import { Humanology } from '../types';

export const DICHOTOMIES: Record<Humanology.YungDichotomy, string> = {
    intuit:         'Интуит',
    sensor:         'Сенсорик',
    logic:          'Логик',
    ethic:          'Этик',
    extravert:      'Экстраверт',
    introvert:      'Интроверт',
    irrational:     'Иррационал',
    rational:       'Рационал',
} as const;