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
                path: ROUTES.SOCIATYPES(), // /types/:id
                container: () => import('./containers/Sociatypes'),
                children: [
                    {
                        path: ROUTES.SOCIATYPES_CARD,
                        index: true,
                        container: () => import('./containers/Sociatypes/SociatypesCard'),
                    },
                    {
                        path: ROUTES.SOCIATYPES_DESCRIPTION,
                        container: () => import('./containers/Sociatypes/SociatypesDescription'),
                    },
                    {
                        path: ROUTES.SOCIATYPES_COMPATIBILITY,
                        container: () => import('./containers/Sociatypes/SociatypesCompatibility'),
                    },
                ],
            },
        ]
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
        container: () => import('./containers/Mindsets')
    }
];
