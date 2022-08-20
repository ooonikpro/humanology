import React from 'react';
import { NATURE_ELEMENTS } from '../constants/natureElements';
import { Humanology } from '../types';

export type UserColorElement = {
    label: string,
    color: React.CSSProperties
}

export const useColorElement = (element: Humanology.Elements): UserColorElement  => {
    return {
        label: NATURE_ELEMENTS[element],
        color: {
            '--color-element': `var(--color-elements-${element})`
        }
    };
};
