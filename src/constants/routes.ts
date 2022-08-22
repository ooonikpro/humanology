import { Tabs } from 'src/types';

export const ROUTES = {
    HOME: '/types',
    SOCIATYPES: (id = ':id') => `/types/${id}`,
    SOCIATYPES_CARD: 'card',
    SOCIATYPES_DESCRIPTION: 'description',
    SOCIATYPES_COMPATIBILITY: 'compatibility',
    SOCIATYPES_VIDEO: 'video',
    SOCIATYPES_BUSINESS: 'business',
    SOCIATYPES_DEVELOPMENT: 'devvelopment',
    SOCIATYPES_STORIES: 'stories',
    SOCIATYPES_PEOPLE: 'people',
    SOCIATYPES_HUMOUR: 'humour',
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
        iconName: 'Aggressor'
    },
    {
        label: 'История',
        path: ROUTES.HISTORY,
        order: 5,
        iconName: 'Aggressor'
    },
    {
        label: 'Информационный метаболизм',
        path: ROUTES.METABOLISM,
        order: 10,
        iconName: 'Aggressor'
    },
    {
        label: 'Функции',
        path: ROUTES.FUNCTIONS,
        order: 6,
        iconName: 'Aggressor'
    },
    {
        label: 'Блоки',
        path: ROUTES.BLOCKS,
        order: 7,
        iconName: 'Aggressor'
    },
    {
        label: 'Аспекты',
        path: ROUTES.ASPECTS,
        order: 8,
        iconName: 'Aggressor'
    },
    {
        label: 'Карты и масти',
        path: ROUTES.SUITS,
        order: 9,
        iconName: 'Aggressor'
    },
    {
        label: 'Квадры',
        path: ROUTES.QUADRAS,
        order: 8,
        iconName: 'Aggressor'
    },
    {
        label: 'Социотипы',
        path: ROUTES.HOME,
        order: 2,
        iconName: 'Aggressor'
    },
    {
        label: 'Интертипные отношения',
        path: ROUTES.RELATIONSHIPS,
        order: 3,
        iconName: 'Aggressor'
    },
    {
        label: 'Типы мышления',
        path: ROUTES.MINDSETS,
        order: 11,
        iconName: 'Aggressor'
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
        label: 'Видео',
        path: '/video',
        order: 3,
    },
    {
        label: 'Совместимость',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_COMPATIBILITY}`,
        order: 4,
    },
    {
        label: 'Деловые качества',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_BUSINESS}`,
        order: 5,
    },
    {
        label: 'Развитие',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_DEVELOPMENT}`,
        order: 6,
    },
    {
        label: 'Истории',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_STORIES}`,
        order: 7,
    },
    {
        label: 'Люди',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_PEOPLE}`,
        order: 8,
    },
    {
        label: 'Мерзости',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_HUMOUR}`,
        order: 9,
    },
];
