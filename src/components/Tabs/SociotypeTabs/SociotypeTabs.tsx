import React from 'react';
import { useParams } from 'react-router-dom';
import { SOCIOTYPES_LINKS } from 'src/constants/routes';
import { Tabs } from '../Tabs';

export const SociotypeTabs: React.FC = () => {
    const { id } = useParams();

    return <Tabs items={SOCIOTYPES_LINKS(id as string)} />;
};
