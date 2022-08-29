import React from 'react';
import { Socionics } from 'src/types';
import { ROLE } from 'src/constants/role';

export type UserColorRoleDual = {
    label: string,
    color: React.CSSProperties
}

export const dualElementMap : Record<Socionics.Role, Socionics.Quadras> = {
    'king': 'air', 
    'queen': 'air', 
    'knight': 'earth', 
    'lady': 'water',
    'paige': 'fire'
};

export const useColorRoleDual = (role: Socionics.Role): UserColorRoleDual => {
    return {
        label: ROLE[role].label,
        color: {
            '--color-role-dual': `var(--color-elements-${dualElementMap[role]})`
        }
    };
};