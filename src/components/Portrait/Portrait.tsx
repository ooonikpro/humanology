import React from 'react';
import { Socionics } from '../../types';

interface Props {
    name: Socionics.SocionicsType
	gender: Socionics.Gender
    className: string
}

export const Portrait: React.FC<Props> = ({ name, gender = 'male',  className }) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const src = require(`../../assets/portraits/${name.toLowerCase()}-${gender}.png`);

    return (
        <img src={src} alt={`${name}-portrait-image`} className={className}/>
    );
};