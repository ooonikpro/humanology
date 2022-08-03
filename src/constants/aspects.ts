import { SocionicsType } from '../types';

export const ASPECTS: Record<SocionicsType.Aspect, string> = {
    business:   'Дела',
    logic:      'Разум',
    emotions:   'Эмоции',
    relations:  'Люди',
    will:       'Воля',
    comfort:    'Комфорт',
    ideas:      'Идеи',
    time:       'Время',
} as const;

export const ASPECTS_LABEL: Record<SocionicsType.Aspect, string> = {
    business:   'Деловая логика',
    logic:      'Структурная логика',
    emotions:   'Этика эмоций',
    relations:  'Этика отношений',
    will:       'Волевая сенсорика',
    comfort:    'Сенсорика ощущений',
    ideas:      'Интуиция возможностей',
    time:       'Интуиция времени',
} as const;

export const MACROASPECTS: Array<{ title: string; subtitle: string; aspects: SocionicsType.Aspect[] }> = [
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