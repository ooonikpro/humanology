import { SocionicsType } from '../types';

export const DICHOTOMIES: Record<SocionicsType.YungDichotomy, string> = {
    intuit:         'Интуит',
    sensor:         'Сенсорик',
    logic:          'Логик',
    ethic:          'Этик',
    extravert:      'Экстраверт',
    introvert:      'Интроверт',
    irrational:     'Иррационал',
    rational:       'Рационал',
} as const;