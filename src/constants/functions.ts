import { Humanology } from '../types';

export const FUNCTION: Record<Humanology.Function, string> = {
    base:       'Базовая',
    creative:   'Творческая',
    role:       'Ролевая',
    back:       'Фоновая',
    activate:   'Активационная',
    suggestive: 'Суггестивная',
    limit:      'Защитная',
    pain:       'Болевая',
} as const;

export const FUNCTION_LABELS: Record<Humanology.Function, string> = {
    base:       'Хорошо',
    creative:   'Надо',
    role:       'Боюсь',
    back:       'Не надо',
    activate:   'Решения',
    suggestive: 'Хочу',
    limit:      'Плохо',
    pain:       'Проблемы',
} as const;
