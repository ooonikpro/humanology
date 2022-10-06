import React from 'react';
import { HISTORY_LINKS } from 'src/constants/routes';
import { Tabs } from '../Tabs';

export const MiniTabsHistory: React.FC = () => {
    return <Tabs items={HISTORY_LINKS} small/>;
};
