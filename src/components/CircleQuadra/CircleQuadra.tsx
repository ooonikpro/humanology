import React from 'react';
import { Humanology } from '../../types';
import { Icon, getIconName } from '../Icon';

interface Props {
    element: Humanology.Elements;
    gender: Humanology.Gender;
    className: string
}

export const CircleQuadra: React.FC<Props> = ({ element, gender, className }) => {
    return (
        <Icon
            name={getIconName(`${element}-${gender === 'male' ? 'strong' : 'weak'}`)}
            size={96}
            color="role"
            className={className}
        />
    );
};