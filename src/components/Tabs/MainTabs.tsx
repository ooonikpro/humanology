import React, { useMemo } from 'react';
import { MAIN_LINKS } from 'src/constants/routes';
import { Tabs } from './Tabs';

export const MainTabs: React.FC = () => {
    const sortedLinks = useMemo(
        () => MAIN_LINKS.map((item) => ({ ...item, icon: item.iconName })).sort((a, b) => a.order - b.order),
        [MAIN_LINKS]
    );

    return <Tabs items={sortedLinks}/>;
};
