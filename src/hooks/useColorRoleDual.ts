import React from 'react';
import { Socionics } from 'src/types';
import { ROLE } from 'src/constants/role';

export type UserColorRoleDual = {
    label: string,
    color: React.CSSProperties
}

export const dualElementMap = {
    'air': 'fire', 
    'fire': 'air', 
    'water': 'earth', 
    'earth': 'water'
};

export const useColorRoleDual = (role: Socionics.Role): UserColorRoleDual => {
    const i = ROLE[role].element;
    const DualElement = dualElementMap[i];
    return {
        label: ROLE[role].label,
        color: {
            '--color-role-dual': `var(--color-elements-${DualElement})`
        }
    };
};