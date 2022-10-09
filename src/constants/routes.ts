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
    SOCIOTYPES_HUMOUR_LURKMORE: 'humour/lurkmore',
    SOCIOTYPES_HUMOUR_SELUTIN: 'humour/selutin',
    SOCIOTYPES_HUMOUR_ELVIRA: 'humour/elvira',
    MENU: '/menu',
    DISCLAIMER: '/disclaimer',
    HISTORY: '/history',
    HISTORY_CARL: '/history/carl',
    HISTORY_KATRIN: '/history/katrin',
    HISTORY_ANTON: '/history/anton',
    HISTORY_AUSHRA: '/history/aushra',
    METABOLISM: '/information-metabolism',
    IDENTIFY: '/identify',
    TESTS: '/tests',
    TEST_EXPRESS: '/tests/meged-ovcharova',
    TEST_SIMPLE: '/tests/vorobiev',
    TEST_COMPLEX: '/tests/filatova',
    WHAT_IS_SOCIONICS: '/what',
    SOCION: '/socion',
    FUNCTIONS: '/functions',
    FUNCTIONS_TAGS: '/functions/tags',
    FUNCTIONS_SIGNS: '/functions/signs',
    FUNCTIONS_ITEM: (functionName = ':functionName') => `/functions/${functionName}`,
    BLOCKS: '/blocks',
    BLOCKS_ITEM: (blockName = ':blockName') => `/blocks/${blockName}`,
    RING_ITEM: (ringName = ':ringName') => `/rings/${ringName}`,
    ASPECTS: '/aspects',
    ASPECT_ITEM: (aspectName = ':aspectName') => `/aspects/${aspectName}`,
    SUITS: '/suits',
    SUITS_CARD: (cardName = ':cardName') => `/suits/${cardName}`,
    SUITS_TAROT: (tarotName = ':tarotName') => `/tarot/${tarotName}`,
    QUADRAS: '/quadras',
    QUADRAS_ITEM: (quadraName = ':quadraName') => `/quadras/${quadraName}`,
    QUADRAS_COMPATIBILITY: '/quadras/compatibility',
    CLUBS: '/clubs',
    CLUBS_ITEM: (clubName = ':clubName') => `/clubs/${clubName}`,
    CLUBS_PSYCHOTYPE: (psychotypeName = ':psychotypeName') => `/psychotypes/${psychotypeName}`,
    PSYCHOTYPES_COMPATIBILITY: '/psychotypes/compatibility',
    REININ: '/reinin',
    YUNG: '/yungs',
    DICHOTOMIES_YUNG: (yungDichotomyName = ':yungDichotomyName') => `/yungs/${yungDichotomyName}`,
    OTHER: '/other',
    RELATIONSHIPS: '/relationships',
    RELATIONSHIPS_ITEM: (relationshipsName = ':relationshipsName') => `/relationships/${relationshipsName}`,
    MINDSETS: '/mindsets',
    MINDSETS_ITEM: (mindsetsName = ':mindsetsName') => `/mindsets/${mindsetsName}`,
    START: '/start',
    LOADING: '/'
};

export const MAIN_LINKS: Tabs[] = [
    {
        label: 'Начало',
        path: ROUTES.START,
        order: 0,
        icon: 'Square0'
    },
    {
        label: 'Как определять?',
        path: ROUTES.IDENTIFY,
        order: 2,
        icon: 'Mug'
    },
    {
        label: 'Социотипы',
        path: ROUTES.HOME,
        order: 1,
        icon: 'Square1'
    },
    {
        label: 'Интертипные отношения',
        path: ROUTES.RELATIONSHIPS,
        order: 3,
        icon: 'Square2'
    },
    {
        label: 'История',
        path: ROUTES.HISTORY,
        order: 4,
        icon: 'SquareTime'
    },
    {
        label: 'Информационный метаболизм',
        path: ROUTES.METABOLISM,
        order: 5,
        icon: 'Square3'
    },
    {
        label: 'Аспекты',
        path: ROUTES.ASPECTS,
        order: 6,
        icon: 'Square4'
    },
    {
        label: 'Функции',
        path: ROUTES.FUNCTIONS,
        order: 7,
        icon: 'Square5'
    },
    {
        label: 'Блоки и кольца',
        path: ROUTES.BLOCKS,
        order: 8,
        icon: 'Square6'
    },
    {
        label: 'Квадры',
        path: ROUTES.QUADRAS,
        order: 9,
        icon: 'Square7'
    },
    {
        label: 'Карты и масти',
        path: ROUTES.SUITS,
        order: 10,
        icon: 'Square8'
    },
    {
        label: 'Клубы и психотипы',
        path: ROUTES.CLUBS,
        order: 11,
        icon: 'Square9'
    },
    {
        label: 'Типы мышления',
        path: ROUTES.MINDSETS,
        order: 12,
        icon: 'Square10'
    },
    {
        label: 'Дихотомии Юнга',
        path: ROUTES.YUNG,
        order: 13,
        icon: 'Square11'
    },
    {
        label: 'Признаки Рейнина',
        path: ROUTES.REININ,
        order: 14,
        icon: 'Square12'
    },
    {
        label: 'Прочее',
        path: ROUTES.OTHER,
        order: 15,
        icon: 'SquareDots'
    }
];

export const SOCIOTYPES_LINKS = (id: string): Tabs[] => [
    {
        label: 'Карточка',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_CARD}`,
        order: 1,
        icon: 'Card'
    },
    {
        label: 'Видео',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_VIDEO}`,
        order: 2,
        icon: 'PlaySquare'
    },
    {
        label: 'Описание',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_DESCRIPTION}`,
        order: 3,
        icon: 'JustifyLeft'
    },
    {
        label: 'Совместимость',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_COMPATIBILITY}`,
        order: 4,
        icon: 'Apps'
    },
    {
        label: 'Деловые качества',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_BUSINESS}`,
        order: 5,
        icon: 'BriefcaseAlt'
    },
    {
        label: 'Развитие',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_DEVELOPMENT}`,
        order: 6,
        icon: 'HappySquare'
    },
    {
        label: 'Истории',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_STORIES}`,
        order: 7,
        icon: 'Annotation'
    },
    {
        label: 'Люди',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_PEOPLE}`,
        order: 8,
        icon: 'Users'
    },
    {
        label: 'Юмор',
        path: `${ROUTES.SOCIOTYPES(id)}/${ROUTES.SOCIOTYPES_HUMOUR}`,
        order: 9,
        icon: 'EmojiSadSquare'
    },
];

export const HISTORY_LINKS = [
    {
        label: 'Карл ',
        path: `${ROUTES.HISTORY_CARL}`,
        order: 1,
    },
    {
        label: 'Кэтрин и Изабель',
        path: `${ROUTES.HISTORY_KATRIN}`,
        order: 2,
    },
    {
        label: 'Антон',
        path: `${ROUTES.HISTORY_ANTON}`,
        order: 3,
    },
    {
        label: 'Аушра',
        path: `${ROUTES.HISTORY_AUSHRA}`,
        order: 4,
    },
];

export const HUMOUR_LINKS = [
    {
        label: 'Люркмор',
        path: `${ROUTES.SOCIOTYPES_HUMOUR_LURKMORE}`,
        order: 1,
    },
    {
        label: 'Селютин',
        path: `${ROUTES.SOCIOTYPES_HUMOUR_SELUTIN}`,
        order: 2,
    },
    {
        label: 'Эльвира Фея',
        path: `${ROUTES.SOCIOTYPES_HUMOUR_ELVIRA}`,
        order: 3,
    },
];
