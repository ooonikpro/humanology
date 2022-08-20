import { Humanology } from '../types';

export const NATURE_ELEMENTS: Record<Humanology.Elements, string> = {
    fire: 'Огонь',
    air: 'Воздух',
    earth: 'Земля',
    water: 'Вода',
} as const;
