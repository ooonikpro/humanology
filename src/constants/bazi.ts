import { SocionicsType } from '../types';

export const BAZI_SIGNS: Record<SocionicsType.Bazi, SocionicsType.BaziProp > = {
    bull: {
        label:      'Бык',
        element:    'earth',
    },
    dragon: {
        label:      'Дракон',
        element:    'air',
    },
    goat: {
        label:      'Коза',
        element:    'water',
    },
    rat: {
        label:      'Крыса',
        element:    'air',
    },
    horse: {
        label:      'Лошадь',
        element:    'fire',
    },
    monkey: {
        label:      'Обезьяна',
        element:    'air',
    },
    chicken: {
        label:      'Петух',
        element:    'earth',
    },
    dog: {
        label:      'Собака',
        element:    'fire',
    },
    pig: {
        label:      'Свинья',
        element:    'water',
    },
    tiger: {
        label:      'Тигр',
        element:    'fire',
    },
    rabbit: {
        label:      'Заяц',
        element:    'water',
    },
    snake: {
        label:      'Змея',
        element:    'earth',
    },
} as const;

export const BAZI_ELEMENTS: Record<SocionicsType.BaziElement, string > = {
    wood:  'Дерево',
    fire:  'Огонь',
    earth: 'Земля',
    metal: 'Метал',
    water: 'Вода',
};