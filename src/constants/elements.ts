import { Humanology } from '../types';

export const ELEMENTS: Record<Humanology.Quadra, string> = {
    fire:   'Огонь',
    air:    'Воздух',
    earth:  'Земля',
    water:  'Вода',
} as const;