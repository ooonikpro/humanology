import React, { useMemo } from 'react';
import { MAIN_LINKS } from 'src/constants/routes';
import { Tab } from '../Tab/Tab';

export const MainTabs: React.FC = () => {
    const sortedLinks = useMemo(
        () => MAIN_LINKS.sort((a, b) => a.order - b.order),
        [MAIN_LINKS]
    );

    return (
        <>
            {sortedLinks.map((item, $i) => (
                <Tab {...item} key={$i} />
            ))}
        </>
    );
};
