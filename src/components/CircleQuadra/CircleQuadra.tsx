import React from 'react'
import { SocionicsType } from '../../types';
import { Icon, getIconName } from '../Icon';

interface Props {
    quadra: SocionicsType.Quadra;
    genderRole: SocionicsType.GenderRole;
    className: string
}

export const CircleQuadra: React.FC<Props> = ({ quadra, genderRole, className }) => {
    return (
        <Icon
            name={getIconName(`${quadra}-${genderRole === 'male' ? 'strong' : 'weak'}`)}
            size={144}
            color="role"
            className={className}
        />
    );
};