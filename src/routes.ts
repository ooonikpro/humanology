import React from 'react';
import { ROUTES } from './constants/routes';

import Home from './containers/Home';
import Sociotypes from './containers/Sociotypes';
import SociotypesCard from './containers/Sociotypes/SociotypesCard';
import SociotypesVideo from './containers/Sociotypes/SociotypesVideo';
import SociotypesDescription from './containers/Sociotypes/SociotypesDescription';
import SociotypesCompatibility from './containers/Sociotypes/SociotypesCompatibility';
import SociotypesBusiness from './containers/Sociotypes/SociotypesBusiness';
import SociotypesDevelopment from './containers/Sociotypes/SociotypesDevelopment';
import SociotypesStories from './containers/Sociotypes/SociotypesStories';
import SociotypesPeople from './containers/Sociotypes/SociotypesPeople';
import SociotypesHumour from './containers/Sociotypes/SociotypesHumour';
import HumourLurkmore from './containers/Sociotypes/SociotypesHumour/Tabs/HumourLurkmore';
import HumourSelutin from './containers/Sociotypes/SociotypesHumour/Tabs/HumourSelutin';
import HumourElvira from './containers/Sociotypes/SociotypesHumour/Tabs/HumourElvira';
import Menu from './containers/Menu';
import Loading from './containers/Loading';
import Start from './containers/Start';
import Disclaimer from './containers/Disclaimer';
import History from './containers/History';
import HistoryCarl from './containers/History/Tabs/Carl';
import HistoryKatrin from './containers/History/Tabs/Katrin';
import HistoryAnton from './containers/History/Tabs/Anton';
import HistoryAushra from './containers/History/Tabs/Aushra';
import Aspects from './containers/Aspects';
import AspectItem from './containers/AspectsItem';
import Blocks from './containers/Blocks';
import BlocksItem from './containers/BlocksItem';
import Suits from './containers/Suits';
import SuitsCard from './containers/SuitsCard';
import SuitsTarot from './containers/SuitsTarot';
import Functions from './containers/Functions';
import FunctionsSigns from './containers/FunctionsSigns';
import FunctionsTags from './containers/FunctionsTags';
import FunctionsItem from './containers/FunctionsItem';
import Metabolism from './containers/Metabolism';
import Quadras from './containers/Quadras';
import Relationships from './containers/Relationships';
import RelationshipsItem from './containers/RelationshipsItem';
import Minds from './containers/Minds';
import Clubs from './containers/Clubs';
import ReininSigns from './containers/ReininSigns';
import DichotomiesYung from './containers/DichotomiesYung';
import Other from './containers/Other';

export interface Route {
    path: string;
    index?: boolean;
    container: React.ComponentType<{ children?: React.ReactChild[] }>;
    children?: Route[];
}

export const routes: Route[] = [
    {
        path: ROUTES.HOME, // /types
        container: Home,
        children: [
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
        ]
    },
    {
        path: ROUTES.LOADING,
        container: Loading
    },
    {
        path: ROUTES.MENU,
        container: Menu
    },
    {
        path: ROUTES.START,
        index: true,
        container: Start,
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
        path: ROUTES.CLUBS,
        container: Clubs
    },
    {
        path: ROUTES.REININ,
        container: ReininSigns
    },
    {
        path: ROUTES.YUNG,
        container: DichotomiesYung
    },
    {
        path: ROUTES.OTHER,
        container: Other
    }
];
