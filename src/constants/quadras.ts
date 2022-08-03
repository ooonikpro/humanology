import { SocionicsType } from '../types';

export const ELEMENTS: Record<SocionicsType.Quadra, string> = {
    fire:   'Огонь',
    air:    'Воздух',
    earth:  'Земля',
    water:  'Вода',
} as const;