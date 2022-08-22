import React from 'react';
import { Socionics } from '../../types';

interface Props {
    name: Socionics.SocionicsType
    className: string
}

export const Person: React.FC<Props> = ({ name,  className }) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const src = require(`../../assets/persons/${name.toLowerCase()}.png`);

    return (
        <img src={src} alt={`${name}-person-image`} className={className}/>
    );
};