import React from 'react';
import { Socionics } from '../../types';
import { Icon, getIconName } from '../Icon';

interface Props {
    element: Socionics.Quadras;
    gender: Socionics.Gender;
    size: number;
    className: string
}

export const CircleQuadra: React.FC<Props> = ({ element, gender, size, className }) => {
    return (
        <Icon
            name={getIconName(`${element}-${gender === 'male' ? 'strong' : 'weak'}`)}
            size={size}
            color="element"
            className={className}
        />
    );
};