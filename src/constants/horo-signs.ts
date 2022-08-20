import { Humanology } from '../types';

export const HORO_SIGNS: Record<Humanology.HoroSign, Humanology.SignProp> = {
    oven: {
        label: 'Овен',
        element: 'fire',
    },
    telets: {
        label: 'Телец',
        element: 'earth',
    },
    blizneci: {
        label: 'Близнецы',
        element: 'air',
    },
    rak: {
        label: 'Рак',
        element: 'water',
    },
    lev: {
        label: 'Лев',
        element: 'fire',
    },
    deva: {
        label: 'Дева',
        element: 'earth',
    },
    vesi: {
        label: 'Весы',
        element: 'air',
    },
    scorpion: {
        label: 'Скорпион',
        element: 'water',
    },
    strelec: {
        label: 'Стрелец',
        element: 'fire',
    },
    kozerog: {
        label: 'Козерог',
        element: 'earth',
    },
    vodolei: {
        label: 'Водолеи',
        element: 'air',
    },
    ribi: {
        label: 'Рыбы',
        element: 'water',
    },
} as const;
