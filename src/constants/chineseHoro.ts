import { Humanology } from '../types';

// eslint-disable-next-line max-len
export const CHINESE_HORO: Record<Humanology.ChineseHoroSign, Humanology.SignProp > = {
    bik: {
        label: 'Бык',
        element: 'earth',
    },
    drakon: {
        label: 'Дракон',
        element: 'air',
    },
    koza: {
        label: 'Коза',
        element: 'water',
    },
    krisa: {
        label: 'Крыса',
        element: 'air',
    },
    loshad: {
        label: 'Лошадь',
        element: 'fire',
    },
    obezyana: {
        label: 'Обезьяна',
        element: 'air',
    },
    petuh: {
        label: 'Петух',
        element: 'earth',
    },
    sobaka: {
        label: 'Собака',
        element: 'fire',
    },
    svinya: {
        label: 'Свинья',
        element: 'water',
    },
    tigr: {
        label: 'Тигр',
        element: 'fire',
    },
    zayac: {
        label: 'Заяц',
        element: 'water',
    },
    zmeya: {
        label: 'Змея',
        element: 'earth',
    },
} as const;
