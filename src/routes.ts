import React from 'react';
import { ROUTES } from './constants/routes';

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
        container: () => import('./containers/Home'),
        children: [
            {
                path: ROUTES.SOCIOTYPES(), // /types/:id
                container: () => import('./containers/Sociotypes'),
                children: [
                    {
                        path: ROUTES.SOCIOTYPES_CARD,
                        index: true,
                        container: () => import('./containers/Sociotypes/SociotypesCard'),
                    },
                    {
                        path: ROUTES.SOCIOTYPES_VIDEO,
                        index: true,
                        container: () => import('./containers/Sociotypes/SociotypesVideo'),
                    },
                    {
                        path: ROUTES.SOCIOTYPES_DESCRIPTION,
                        container: () => import('./containers/Sociotypes/SociotypesDescription'),
                    },
                    {
                        path: ROUTES.SOCIOTYPES_COMPATIBILITY,
                        container: () => import('./containers/Sociotypes/SociotypesCompatibility'),
                    },
                    {
                        path: ROUTES.SOCIOTYPES_BUSINESS,
                        container: () => import('./containers/Sociotypes/SociotypesBusiness'),
                    },
                    {
                        path: ROUTES.SOCIOTYPES_DEVELOPMENT,
                        container: () => import('./containers/Sociotypes/SociotypesDevelopment'),
                    },
                    {
                        path: ROUTES.SOCIOTYPES_STORIES,
                        container: () => import('./containers/Sociotypes/SociotypesStories'),
                    },
                    {
                        path: ROUTES.SOCIOTYPES_PEOPLE,
                        container: () => import('./containers/Sociotypes/SociotypesPeople'),
                    },
                    {
                        path: ROUTES.SOCIOTYPES_HUMOUR,
                        container: () => import('./containers/Sociotypes/SociotypesHumour'),
                    },
                ],
            },
        ]
    },
    {
        path: ROUTES.MENU,
        index: true,
        container: () => import('./containers/Menu')
    },
    {
        path: ROUTES.START,
        index: true,
        container: () => import('./containers/Start')
    },
    {
        path: ROUTES.DISCLAIMER,
        container: () => import('./containers/Disclaimer'),
    },
    {
        path: ROUTES.HISTORY,
        container: () => import('./containers/History'),
    },
    {
        path: ROUTES.ASPECTS,
        container: () => import('./containers/Aspects'),
    },
    {
        path: ROUTES.BLOCKS,
        container: () => import('./containers/Blocks'),
    },
    {
        path: ROUTES.BLOCKS_ITEM,
        container: () => import('./containers/BlocksItem'),
    },
    {
        path: ROUTES.SUITS,
        container: () => import('./containers/Suits'),
    },
    {
        path: ROUTES.SUITS_CARD(),
        container: () => import('./containers/SuitsCard')
    },
    {
        path: ROUTES.SUITS_TAROT(),
        container: () => import('./containers/SuitsTarot')
    },
    {
        path: ROUTES.FUNCTIONS,
        container: () => import('./containers/Functions'),
    },
    {
        path: ROUTES.FUNCTIONS_ITEM,
        container: () => import('./containers/FunctionsItem'),
    },
    {
        path: ROUTES.METABOLISM,
        container: () => import('./containers/Metabolism'),
    },
    {
        path: ROUTES.QUADRAS,
        container: () => import('./containers/Quadras'),
    },
    {
        path: ROUTES.RELATIONSHIPS,
        container: () => import('./containers/Relationships'),
    },
    {
        path: ROUTES.RELATIONSHIPS_ITEM,
        container: () => import('./containers/RelationshipsItem'),
    },
    {
        path: ROUTES.MINDSETS,
        container: () => import('./containers/Mindsets/Mindsets')
    },
    {
        path: ROUTES.CLUBS,
        container: () => import('./containers/Clubs')
    },
    {
        path: ROUTES.REININ,
        container: () => import('./containers/ReininSigns')
    },
    {
        path: ROUTES.YUNG,
        container: () => import('./containers/DichotomiesYung')
    },
    {
        path: ROUTES.OTHER,
        container: () => import('./containers/Other')
    }
];
