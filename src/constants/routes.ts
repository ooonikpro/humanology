import { Tabs } from 'src/types';

export const ROUTES = {
    HOME: '/types',
    SOCIATYPES: (id = ':id') => `/types/${id}`,
    SOCIATYPES_CARD: 'card',
    SOCIATYPES_DESCRIPTION: 'description',
    SOCIATYPES_COMPATIBILITY: 'compatibility',
    SOCIATYPES_VIDEO: 'video',
    SOCIATYPES_BUSINESS: 'business',
    SOCIATYPES_DEVELOPMENT: 'development',
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
        order: 3,
        iconName: 'AlertSquare'
    },
    {
        label: 'История',
        path: ROUTES.HISTORY,
        order: 4,
        iconName: 'Time'
    },
    {
        label: 'Информационный метаболизм',
        path: ROUTES.METABOLISM,
        order: 5,
        iconName: 'Square3'
    },
    {
        label: 'Функции',
        path: ROUTES.FUNCTIONS,
        order: 6,
        iconName: 'Square4'
    },
    {
        label: 'Блоки',
        path: ROUTES.BLOCKS,
        order: 7,
        iconName: 'Square5'
    },
    {
        label: 'Аспекты',
        path: ROUTES.ASPECTS,
        order: 8,
        iconName: 'Square6'
    },
    {
        label: 'Карты и масти',
        path: ROUTES.SUITS,
        order: 10,
        iconName: 'Square8'
    },
    {
        label: 'Квадры',
        path: ROUTES.QUADRAS,
        order: 9,
        iconName: 'Square7'
    },
    {
        label: 'Социотипы',
        path: ROUTES.HOME,
        order: 1,
        iconName: 'Square1'
    },
    {
        label: 'Интертипные отношения',
        path: ROUTES.RELATIONSHIPS,
        order: 2,
        iconName: 'Square2'
    },
    {
        label: 'Типы мышления',
        path: ROUTES.MINDSETS,
        order: 11,
        iconName: 'Square9'
    }
];

export const SOCIATYPES_LINKS = (id: string) => [
    {
        label: 'Карточка',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_CARD}`,
        order: 1,
        iconName: 'AlertSquare'
    },
    {
        label: 'Видео',
        path: '/video',
        order: 2,
        iconName: 'PlaySquare'
    },
    {
        label: 'Описание',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_DESCRIPTION}`,
        order: 3,
        iconName: 'JustifyLeft'
    },
    {
        label: 'Совместимость',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_COMPATIBILITY}`,
        order: 4,
        iconName: 'Apps'
    },
    {
        label: 'Деловые качества',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_BUSINESS}`,
        order: 5,
        iconName: 'BriefcaseAlt'
    },
    {
        label: 'Развитие',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_DEVELOPMENT}`,
        order: 6,
        iconName: 'HappySquare'
    },
    {
        label: 'Истории',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_STORIES}`,
        order: 7,
        iconName: 'Annotation'
    },
    {
        label: 'Люди',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_PEOPLE}`,
        order: 8,
        iconName: 'Users'
    },
    {
        label: 'Мерзости',
        path: `${ROUTES.SOCIATYPES(id)}/${ROUTES.SOCIATYPES_HUMOUR}`,
        order: 9,
        iconName: 'EmojiSadSquare'
    },
];
