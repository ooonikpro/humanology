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
		path: ROUTES.SOCIONICSTYPES(),
        container: () => import('./containers/SocionicsTypes'),
        children: [
            {
                path: ROUTES.SOCIONICSTYPES_CARD,
                index: true,
                container: () => import('./containers/SocionicsCard'),
            },
            {
                path: ROUTES.SOCIONICSTYPES_DESCRIPTION,
                container: () => import('./containers/SocionicsCardDescription'),
            },
            {
                path: ROUTES.SOCIONICSTYPES_COMPATIBILITY,
                container: () => import('./containers/SocionicsCardCompatibility'),
            },
        ],
	}
]