import { Tabs } from 'src/types';

export const ROUTES = {
    HOME: '/types',
    SOCIOTYPES: (id = ':id') => `/types/${id}`,
    SOCIOTYPES_CARD: 'card',
    SOCIOTYPES_DESCRIPTION: 'description',
    SOCIOTYPES_COMPATIBILITY: 'compatibility',
    SOCIOTYPES_VIDEO: 'video',
    SOCIOTYPES_BUSINESS: 'business',
    SOCIOTYPES_DEVELOPMENT: 'development',
    SOCIOTYPES_STORIES: 'stories',
    SOCIOTYPES_PEOPLE: 'people',
    SOCIOTYPES_HUMOUR: 'humour',
    MENU: '/',
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
    CLUBS: '/clubs',
    REININ: '/reinin',
    YUNG: '/yung',
    OTHER: '/other',
    RELATIONSHIPS: '/relationships',
    RELATIONSHIPS_ITEM: '/relationships/:id',
    MINDSETS: '/mindsets',
    START: '/start'
};

export const MAIN_LINKS: Tabs[] = [
    {
        label: 'Быстрый старт',
        path: ROUTES.START,
        order: 1,
        iconName: 'StarSquare'
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
        label: 'Блоки и кольца',
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
        label: 'Квадры',
        path: ROUTES.QUADRAS,
        order: 9,
        iconName: 'Square7'
    },
    {
        label: 'Карты и масти',
        path: ROUTES.SUITS,
        order: 10,
        iconName: 'Square8'
    },
    {
        label: 'Клубы',
        path: ROUTES.CLUBS,
        order: 11,
        iconName: 'Square9'
    },
    {
        label: 'Типы мышления',
        path: ROUTES.MINDSETS,
        order: 12,
        iconName: 'Square10'
    },
    {
        label: 'Дихотомии Юнга',
        path: ROUTES.YUNG,
        order: 13,
        iconName: 'Square11'
    },
    {
        label: 'Признаки Рейнина',
        path: ROUTES.REININ,
        order: 14,
        iconName: 'Square12'
    },
    {
        label: 'Прочее',
        path: ROUTES.OTHER,
        order: 15,
        iconName: 'SquareDots'
    }
];

export const SOCIOTYPES_LINKS = (id: string) => [
    {
        label: 'Карточка',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_CARD}`,
        order: 1,
        iconName: 'Card'
    },
    {
        label: 'Видео',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_VIDEO}`,
        order: 2,
        iconName: 'PlaySquare'
    },
    {
        label: 'Описание',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_DESCRIPTION}`,
        order: 3,
        iconName: 'JustifyLeft'
    },
    {
        label: 'Совместимость',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_COMPATIBILITY}`,
        order: 4,
        iconName: 'Apps'
    },
    {
        label: 'Деловые качества',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_BUSINESS}`,
        order: 5,
        iconName: 'BriefcaseAlt'
    },
    {
        label: 'Развитие',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_DEVELOPMENT}`,
        order: 6,
        iconName: 'HappySquare'
    },
    {
        label: 'Истории',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_STORIES}`,
        order: 7,
        iconName: 'Annotation'
    },
    {
        label: 'Люди',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_PEOPLE}`,
        order: 8,
        iconName: 'Users'
    },
    {
        label: 'Юмор',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_HUMOUR}`,
        order: 9,
        iconName: 'EmojiSadSquare'
    },
];
