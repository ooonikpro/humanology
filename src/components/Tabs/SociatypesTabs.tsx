import React from 'react';
import { useParams } from 'react-router-dom';
import { SOCIATYPES_LINKS } from 'src/constants/routes';
import { Tab } from '../Tab/Tab';

export const SociatypesTabs: React.FC = () => {
    const { id } = useParams();

    return (
        <>
            {SOCIATYPES_LINKS(id as string).map((item, $i) => (
                <Tab {...item} key={$i} />
            ))}
        </>
    );
};
