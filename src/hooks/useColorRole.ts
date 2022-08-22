import React from 'react';
import { Socionics } from '../types';
import { ROLE } from '../constants/role';

export type UserColorRole = {
    label: string,
    color: React.CSSProperties
}

export const useColorRole = (role: Socionics.Role): UserColorRole => {
    return {
        label: ROLE[role].label,
        color: {
            '--color-role': `var(--color-elements-${ROLE[role].element})`
        }
    };
};