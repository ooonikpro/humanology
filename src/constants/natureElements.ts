import { Socionics } from '../types';

export const QUADRAS: Record<Socionics.Quadras, string> = {
    air: 'Воздух',
    fire: 'Огонь',
    water: 'Вода',
    earth: 'Земля',
} as const;

export const QUADRAS_SUBTITLE: Record<Socionics.Quadras, string[]> = {
    air: ['Дети', 'Альфа'],
    fire: ['Подростки', 'Бета'],
    water: ['Взрослые', 'Гамма'],
    earth: ['Старики', 'Дельта'],
};
