import React from 'react';
import { QUADRAS } from '../constants/natureElements';
import { Socionics } from '../types';

export type UserColorElement = {
    label: string,
    color: React.CSSProperties
}

export const useColorElement = (element: Socionics.Quadras): UserColorElement  => {
    return {
        label: QUADRAS[element],
        color: {
            '--color-element': `var(--color-elements-${element})`
        }
    };
};
