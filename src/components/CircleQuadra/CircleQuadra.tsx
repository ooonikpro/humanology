import React from 'react';
import { Socionics } from '../../types';

interface Props {
    id: Socionics.SocionicsType;
    className: string
}

export const CircleQuadra: React.FC<Props> = ({ id, className }) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const src = require(`../../assets/circles/${id}-circle.svg`);

    return (
        <img src={src} className={className}/>
    );
};