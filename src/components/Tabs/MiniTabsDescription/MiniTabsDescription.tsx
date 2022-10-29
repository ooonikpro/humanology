import React from 'react';
import { DESCRIPTION_LINKS } from 'src/constants/routes';
import { Tabs } from '../Tabs';

export const MiniTabsDescription: React.FC = () => {
    return (
        <Tabs items={DESCRIPTION_LINKS} small />
    );
};
