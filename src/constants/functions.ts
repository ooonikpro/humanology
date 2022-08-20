import { Humanology } from '../types';

export const FUNCTION: Record<Humanology.Function, string> = {
    base: 'Базовая',
    creative: 'Творческая',
    role: 'Ролевая',
    back: 'Фоновая',
    limit: 'Защитная',
    pain: 'Болевая',
    activate: 'Активационная',
    suggestive: 'Суггестивная',
} as const;

export const FUNCTION_LABELS: Record<Humanology.Function, string> = {
    base: 'Хорошо',
    creative: 'Надо',
    role: 'Боюсь',
    back: 'Не надо',
    limit: 'Плохо',
    pain: 'Проблемы',
    activate: 'Решения',
    suggestive: 'Хочу',
} as const;
