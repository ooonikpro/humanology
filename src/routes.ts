import React from 'react';
import { ROUTES } from './constants/routes';

const Home = () => import('./containers/Home');
const Sociotypes = () => import('./containers/Sociotypes');
const SociotypesCard = () => import('./containers/Sociotypes/SociotypesCard');
const SociotypesVideo = () => import('./containers/Sociotypes/SociotypesVideo');
const SociotypesDescription = () => import('./containers/Sociotypes/SociotypesDescription');
const DescriptionMikelsone = () => import('./containers/Sociotypes/SociotypesDescription/Tabs/DescriptionMikelsone');
const DescriptionStratievskaya = () => import('./containers/Sociotypes/SociotypesDescription/Tabs/DescriptionStratievskaya');
const SociotypesCompatibility = () => import('./containers/Sociotypes/SociotypesCompatibility');
const SociotypesBusiness = () => import('./containers/Sociotypes/SociotypesBusiness');
const SociotypesDevelopment = () => import('./containers/Sociotypes/SociotypesDevelopment');
const SociotypesStories = () => import('./containers/Sociotypes/SociotypesStories');
const SociotypesPeople = () => import('./containers/Sociotypes/SociotypesPeople');
const SociotypesHumour = () => import('./containers/Sociotypes/SociotypesHumour');
const HumourLurkmore = () => import('./containers/Sociotypes/SociotypesHumour/Tabs/HumourLurkmore');
const HumourSelutin = () => import('./containers/Sociotypes/SociotypesHumour/Tabs/HumourSelutin');
const HumourElvira = () => import('./containers/Sociotypes/SociotypesHumour/Tabs/HumourElvira');
const Loading = () => import('./containers/Loading');
const Start = () => import('./containers/Start');
const Identify = () => import('./containers/Identify');
const Tests = () => import('./containers/Tests');
const TestSimple = () => import('./containers/TestSimple');
const TestComplex = () => import('./containers/TestComplex');
const TestExpress = () => import('./containers/TestExpress');
const WhatIsSocionics = () => import('./containers/WhatIsSocionics');
const Disclaimer = () => import('./containers/Disclaimer');
const History = () => import('./containers/History');
const HistoryCarl = () => import('./containers/History/Tabs/Carl');
const HistoryKatrin = () => import('./containers/History/Tabs/Katrin');
const HistoryAnton = () => import('./containers/History/Tabs/Anton');
const HistoryAushra = () => import('./containers/History/Tabs/Aushra');
const HistoryReinin = () => import('./containers/History/Tabs/Reinin');
const HistoryNow = () => import('./containers/History/Tabs/Now');
const Aspects = () => import('./containers/Aspects');
const AspectItem = () => import('./containers/AspectsItem');
const Blocks = () => import('./containers/Blocks');
const BlocksItem = () => import('./containers/BlocksItem');
const RingItem = () => import('./containers/RingItem');
const Suits = () => import('./containers/Suits');
const SuitsCard = () => import('./containers/SuitsCard');
const SuitsTarot = () => import('./containers/SuitsTarot');
const Functions = () => import('./containers/Functions');
const FunctionsSigns = () => import('./containers/FunctionsSigns');
const FunctionsTags = () => import('./containers/FunctionsTags');
const FunctionsItem = () => import('./containers/FunctionsItem');
const Metabolism = () => import('./containers/Metabolism');
const Quadras = () => import('./containers/Quadras');
const QuadrasItem = () => import('./containers/QuadrasItem');
const QuadrasCompatibility = () => import('./containers/QuadrasCompatibility');
const Relationships = () => import('./containers/Relationships');
const RelationshipsItem = () => import('./containers/RelationshipsItem');
const Minds = () => import('./containers/Minds');
const MindsItem = () => import('./containers/MindsItem');
const Clubs = () => import('./containers/Clubs');
const ClubsItem = () => import('./containers/ClubsItem');
const ClubsPsychotype = () => import('./containers/ClubsPsychotype');
const PsychotypesCompatibility = () => import('./containers/PsychotypesCompatibility');
const ReininSigns = () => import('./containers/ReininSigns');
const ReininSignsItem = () => import('./containers/ReininSignsItem');
const DichotomiesYung = () => import('./containers/DichotomiesYung');
const DichotomiesYungItem = () => import('./containers/DichotomiesYungItem');
const Other = () => import('./containers/Other');
const Socion = () => import('./containers/Socion');

export interface Route {
    path: string;
    index?: boolean;
    container: () => Promise<{
        default: React.ComponentType<{ children?: React.ReactChild[] }>;
    }>;
    children?: Route[];
}

export const routes: Route[] = [
    {
        path: ROUTES.HOME, // /types
        container: Home,
    },
    {
        path: ROUTES.SOCIOTYPES(), // /types/:id
        container: Sociotypes,
        children: [
            {
                path: ROUTES.SOCIOTYPES_CARD,
                index: true,
                container: SociotypesCard,
            },
            {
                path: ROUTES.SOCIOTYPES_VIDEO,
                index: true,
                container: SociotypesVideo,
            },
            {
                path: ROUTES.SOCIOTYPES_DESCRIPTION,
                container: SociotypesDescription,
                children: [
                    {
                        path: ROUTES.SOCIOTYPES_DESCRIPTION_MIKELSONE,
                        container: DescriptionMikelsone,
                    },
                    {
                        path: ROUTES.SOCIOTYPES_DESCRIPTION_STRATIEVSKAYA,
                        container: DescriptionStratievskaya,
                    },
                ]
            },
            {
                path: ROUTES.SOCIOTYPES_COMPATIBILITY,
                container: SociotypesCompatibility,
            },
            {
                path: ROUTES.SOCIOTYPES_BUSINESS,
                container: SociotypesBusiness,
            },
            {
                path: ROUTES.SOCIOTYPES_DEVELOPMENT,
                container: SociotypesDevelopment,
            },
            {
                path: ROUTES.SOCIOTYPES_STORIES,
                container: SociotypesStories,
            },
            {
                path: ROUTES.SOCIOTYPES_PEOPLE,
                container: SociotypesPeople,
            },
            {
                path: ROUTES.SOCIOTYPES_HUMOUR,
                container: SociotypesHumour,
                children: [
                    {
                        path: ROUTES.SOCIOTYPES_HUMOUR_LURKMORE,
                        container: HumourLurkmore,
                    },
                    {
                        path: ROUTES.SOCIOTYPES_HUMOUR_SELUTIN,
                        container: HumourSelutin,
                    },
                    {
                        path: ROUTES.SOCIOTYPES_HUMOUR_ELVIRA,
                        container: HumourElvira,
                    },
                ],
            },
        ],
    },
    {
        path: ROUTES.LOADING,
        container: Loading
    },
    {
        path: ROUTES.START,
        index: true,
        container: Start,
    },
    {
        path: ROUTES.IDENTIFY,
        container: Identify,
    },
    {
        path: ROUTES.TESTS,
        container: Tests,
    },
    {
        path: ROUTES.TEST_EXPRESS,
        container: TestExpress,
    },
    {
        path: ROUTES.TEST_SIMPLE,
        container: TestSimple,
    },
    {
        path: ROUTES.TEST_COMPLEX,
        container: TestComplex,
    },
    {
        path: ROUTES.WHAT_IS_SOCIONICS,
        container: WhatIsSocionics,
    },
    {
        path: ROUTES.SOCION,
        container: Socion,
    },
    {
        path: ROUTES.DISCLAIMER,
        container: Disclaimer,
    },
    {
        path: ROUTES.HISTORY,
        container: History,
        children: [
            {
                path: ROUTES.HISTORY_CARL,
                container: HistoryCarl,
            },
            {
                path: ROUTES.HISTORY_KATRIN,
                container: HistoryKatrin,
            },
            {
                path: ROUTES.HISTORY_ANTON,
                container: HistoryAnton,
            },
            {
                path: ROUTES.HISTORY_AUSHRA,
                container: HistoryAushra,
            },
            {
                path: ROUTES.HISTORY_REININ,
                container: HistoryReinin,
            },
            {
                path: ROUTES.HISTORY_NOW,
                container: HistoryNow,
            },
        ]
    },
    {
        path: ROUTES.ASPECTS,
        container: Aspects,
    },
    {
        path: ROUTES.ASPECT_ITEM(),
        container: AspectItem,
    },
    {
        path: ROUTES.BLOCKS,
        container: Blocks
    },
    {
        path: ROUTES.BLOCKS_ITEM(),
        container: BlocksItem,
    },
    {
        path: ROUTES.RING_ITEM(),
        container: RingItem,
    },
    {
        path: ROUTES.SUITS,
        container: Suits,
    },
    {
        path: ROUTES.SUITS_CARD(),
        container: SuitsCard,
    },
    {
        path: ROUTES.SUITS_TAROT(),
        container: SuitsTarot
    },
    {
        path: ROUTES.FUNCTIONS,
        container: Functions,
    },
    {
        path: ROUTES.FUNCTIONS_TAGS,
        container: FunctionsTags,
    },
    {
        path: ROUTES.FUNCTIONS_SIGNS,
        container: FunctionsSigns,
    },
    {
        path: ROUTES.FUNCTIONS_ITEM(),
        container: FunctionsItem,
    },
    {
        path: ROUTES.METABOLISM,
        container: Metabolism,
    },
    {
        path: ROUTES.QUADRAS,
        container: Quadras,
    },
    {
        path: ROUTES.QUADRAS_ITEM(),
        container: QuadrasItem,
    },
    {
        path: ROUTES.QUADRAS_COMPATIBILITY,
        container: QuadrasCompatibility,
    },
    {
        path: ROUTES.RELATIONSHIPS,
        container: Relationships,
    },
    {
        path: ROUTES.RELATIONSHIPS_ITEM(),
        container: RelationshipsItem,
    },
    {
        path: ROUTES.MINDSETS,
        container: Minds,
    },
    {
        path: ROUTES.MINDSETS_ITEM(),
        container: MindsItem,
    },
    {
        path: ROUTES.CLUBS,
        container: Clubs
    },
    {
        path: ROUTES.CLUBS_ITEM(),
        container: ClubsItem,
    },
    {
        path: ROUTES.CLUBS_PSYCHOTYPE(),
        container: ClubsPsychotype,
    },
    {
        path: ROUTES.PSYCHOTYPES_COMPATIBILITY,
        container: PsychotypesCompatibility,
    },
    {
        path: ROUTES.REININ,
        container: ReininSigns
    },
    {
        path: ROUTES.REININ_SIGNS(),
        container: ReininSignsItem
    },
    {
        path: ROUTES.YUNG,
        container: DichotomiesYung
    },
    {
        path: ROUTES.DICHOTOMIES_YUNG(),
        container: DichotomiesYungItem
    },
    {
        path: ROUTES.OTHER,
        container: Other
    },
    {
        path: '*',
        container: Start,
    }
];
