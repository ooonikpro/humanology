import React from 'react';
import { HUMOUR_LINKS } from 'src/constants/routes';
import { Tabs } from '../Tabs';

export const MiniTabsHumour: React.FC = () => {
    return <Tabs items={HUMOUR_LINKS} />;
};
