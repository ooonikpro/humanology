import { Humanology } from '../types';

export const NATURE_ELEMENTS: Record<Humanology.Elements, string> = {
    air: 'Воздух',
    fire: 'Огонь',
    water: 'Вода',
    earth: 'Земля',
} as const;
