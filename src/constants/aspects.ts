import { Humanology } from '../types';

export const ASPECTS: Record<Humanology.Aspect, string> = {
    ideas: 'Идеи',
    business: 'Дела',
    will: 'Воля',
    emotions: 'Эмоции',
    time: 'Время',
    logic: 'Разум',
    comfort: 'Комфорт',
    people: 'Люди',
} as const;

export const ASPECTS_LABEL: Record<Humanology.Aspect, string> = {
    ideas: 'Интуиция возможностей',
    business: 'Деловая логика',
    will: 'Волевая сенсорика',
    emotions: 'Этика эмоций',
    time: 'Интуиция времени',
    logic: 'Структурная логика',
    comfort: 'Сенсорика ощущений',
    people: 'Этика отношений',
} as const;

export const ASPECTS_GROUPS: Array<{ title: string; subtitle: string; aspects: Humanology.Aspect[] }> = [
    {
        title: 'Обьекты',
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
