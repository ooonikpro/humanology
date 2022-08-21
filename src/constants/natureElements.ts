import { Humanology } from '../types';

export const QUADRAS: Record<Humanology.Elements, string> = {
    air: 'Воздух',
    fire: 'Огонь',
    water: 'Вода',
    earth: 'Земля',
} as const;
