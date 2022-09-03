import React from 'react';
import { Socionics } from '../../types';

interface Props {
    name: Socionics.SocionicsType
	gender: Socionics.Gender
    kid?: boolean;
    className: string
}

export const Portrait: React.FC<Props> = ({ name, gender = 'male', kid = false,  className }) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const src = require(`../../assets/portraits/${name.toLowerCase()}-${gender}.png`);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const srcKid = require(`../../assets/portraits/${name.toLowerCase()}-${gender}-kid.png`);

    return (
        <img src={kid ? srcKid : src} alt={`${name}-portrait-image`} className={className}/>
    );
};