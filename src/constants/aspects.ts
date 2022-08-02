import { Humanology } from '../types';

export const ASPECTS: Record<Humanology.Aspect, string> = {
    ideas:      'Идеи',
    business:   'Дела',
    will:       'Воля',
    emotions:   'Эмоции',
    time:       'Время',
    logic:      'Разум',
    comfort:    'Комфорт',
    relations:  'Люди',
} as const;

export const ASPECTS_LABEL: Record<Humanology.Aspect, string> = {
    ideas:      'Интуиция возможностей',
    business:   'Деловая логика',
    will:       'Волевая сенсорика',
    emotions:   'Этика эмоций',
    time:       'Интуиция времени',
    logic:      'Структурная логика',
    comfort:    'Сенсорика ощущений',
    relations:  'Этика отношений',
} as const;

export const MACROASPECTS: Array<{ title: string; subtitle: string; aspects: Humanology.Aspect[] }> = [
    {
        title:      'Объекты',
        subtitle:   'Логика',
        aspects:    ['business', 'logic']
    },
    {
        title:      'Энергия',
        subtitle:   'Этика',
        aspects:    ['emotions', 'relations']
    },
    {
        title:      'Пространство',
        subtitle:   'Сенсорика',
        aspects:    ['will', 'comfort']
    },
    {
        title:      'Время',
        subtitle:   'Интуиция',
        aspects:    ['ideas', 'time']
    }
];
