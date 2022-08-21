import React from 'react';
import { Humanology } from '../../types';
import { Icon, getIconName } from '../Icon';

interface Props {
    element: Humanology.Elements;
    gender: Humanology.Gender;
    size: 96 | 144 | 160;
    className: string
}

export const CircleQuadra: React.FC<Props> = ({ element, gender, size, className }) => {
    return (
        <Icon
            name={getIconName(`${element}-${gender === 'male' ? 'strong' : 'weak'}`)}
            size={size}
            color="role"
            className={className}
        />
    );
};