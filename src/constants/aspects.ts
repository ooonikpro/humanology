import { Socionics } from '../types';

export const ASPECTS: Record<Socionics.Aspect, string> = {
    business: 'Дела',
    logic: 'Разум',
    emotions: 'Эмоции',
    people: 'Люди',
    will: 'Воля',
    comfort: 'Комфорт',
    ideas: 'Идеи',
    time: 'Время',
} as const;

export const ASPECTS_LABEL: Record<Socionics.Aspect, string> = {
    business: 'Деловая логика',
    logic: 'Структурная логика',
    emotions: 'Этика эмоций',
    people: 'Этика отношений',
    will: 'Волевая сенсорика',
    comfort: 'Сенсорика ощущений',
    time: 'Интуиция времени',
    ideas: 'Интуиция возможностей',
} as const;

export const ASPECTS_GROUPS: Array<{ title: string; subtitle: string; aspects: Socionics.Aspect[] }> = [
    {
        title: 'Объекты',
        subtitle: 'Логика',
        aspects: ['business', 'logic']
    },
    {
        title: 'Энергия',
        subtitle: 'Этика',
        aspects: ['emotions', 'people']
    },
    {
        title: 'Пространство',
        subtitle: 'Сенсорика',
        aspects: ['will', 'comfort']
    },
    {
        title: 'Время',
        subtitle: 'Интуиция',
        aspects: ['ideas', 'time']
    }
];
