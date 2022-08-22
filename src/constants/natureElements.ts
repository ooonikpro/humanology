import { Socionics } from '../types';

export const QUADRAS: Record<Socionics.Quadras, string> = {
    air: 'Воздух',
    fire: 'Огонь',
    water: 'Вода',
    earth: 'Земля',
} as const;
