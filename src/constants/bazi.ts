import { Bazi } from '../types/bazi';

// eslint-disable-next-line max-len
export const BAZI_SIGNS: Record<Bazi.BaziSign, Bazi.SignProp > = {
    bull: {
        label: 'Бык',
        element: 'earth',
    },
    dragon: {
        label: 'Дракон',
        element: 'air',
    },
    goat: {
        label: 'Коза',
        element: 'water',
    },
    rat: {
        label: 'Крыса',
        element: 'air',
    },
    horse: {
        label: 'Лошадь',
        element: 'fire',
    },
    monkey: {
        label: 'Обезьяна',
        element: 'air',
    },
    chicken: {
        label: 'Петух',
        element: 'earth',
    },
    dog: {
        label: 'Собака',
        element: 'fire',
    },
    pig: {
        label: 'Свинья',
        element: 'water',
    },
    tiger: {
        label: 'Тигр',
        element: 'fire',
    },
    hare: {
        label: 'Заяц',
        element: 'water',
    },
    snake: {
        label: 'Змея',
        element: 'earth',
    },
} as const;
