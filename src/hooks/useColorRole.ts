import React from 'react';
import { Humanology } from '../types';
import { ROLE } from '../constants/role';

export type UserColorRole = {
    label: string,
    color: React.CSSProperties
}

export const useColorRole = (role: Humanology.Role): UserColorRole => {
    return {
        label: ROLE[role].label,
        color: {
            '--color-role': `var(--color-elements-${ROLE[role].element})`
        }
    };
};