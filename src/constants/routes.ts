import { Tabs } from 'src/types';

export const ROUTES = {
    HOME: '/types',
    SOCIATYPES: (id = ':id') => `/type/${id}`,
    SOCIATYPES_CARD: 'card',
    SOCIATYPES_DESCRIPTION: 'description',
    SOCIATYPES_COMPATIBILITY: 'compatibility',
    START: '/',
    DISCLAIMER: '/disclaimer',
    HISTORY: '/history',
    METABOLISM: '/information-metabolism',
    FUNCTIONS: '/functions',
    FUNCTIONS_ITEM: '/functions/:functionName',
    BLOCKS: '/blocks',
    BLOCKS_ITEM: '/blocks/:blockName',
    ASPECTS: '/aspects',
    SUITS: '/suits',
    SUITS_CARD: (cardName = ':cardName') => `/suits/card/${cardName}`,
    SUITS_TAROT: (tarotName = ':tarotName') => `/suits/tarot/${tarotName}`,
    QUADRAS: '/quadras',
    RELATIONSHIPS: '/relationships',
    RELATIONSHIPS_ITEM: '/relationships/:id',
    MINDSETS: '/mindsets'
};

export const MAIN_LINKS: Tabs[] = [
    {
        label: 'Дисклеймер',
        path: ROUTES.DISCLAIMER,
        order: 4,
    },
    {
        label: 'История',
        path: ROUTES.HISTORY,
        order: 5,
    },
    {
        label: 'Информационный метаболизм',
        path: ROUTES.METABOLISM,
        order: 10,
    },
    {
        label: 'Функции',
        path: ROUTES.FUNCTIONS,
        order: 6,
    },
    {
        label: 'Блоки',
        path: ROUTES.BLOCKS,
        order: 7,
    },
    {
        label: 'Аспекты',
        path: ROUTES.ASPECTS,
        order: 8,
    },
    {
        label: 'Карты и масти',
        path: ROUTES.SUITS,
        order: 9,
    },
    {
        label: 'Квадры',
        path: ROUTES.QUADRAS,
        order: 8,
    },
    {
        label: 'Социотипы',
        path: ROUTES.HOME,
        order: 2,
    },
    {
        label: 'Интертипные отношения',
        path: ROUTES.RELATIONSHIPS,
        order: 3,
    },
    {
        label: 'Типы мышления',
        path: ROUTES.MINDSETS,
        order: 11
    }
];

export const SOCIATYPES_LINKS = (id: string) => [
    {
        label: 'Карточка',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_CARD}`,
        order: 1,
    },
    {
        label: 'Описание',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_DESCRIPTION}`,
        order: 2,
    },
    {
        label: 'Совместимость',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_COMPATIBILITY}`,
        order: 3,
    },
];
