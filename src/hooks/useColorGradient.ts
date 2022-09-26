import React from 'react';
import { Socionics } from 'src/types';

export type UserColorGradient = {
    label: string,
    color: React.CSSProperties
}

export const GradientColorMap: Record<Socionics.SocionicsType, string> = {
    'ENTP': 'water',
    'ISFP': 'earth',
    'ESFJ': 'fire',
    'INTJ': 'air-dark',
    'ISTJ': 'earth',
    'ENFJ': 'water',
    'INFP': 'air',
    'ESTP': 'fire-dark',
    'ESFP': 'fire',
    'INTP': 'air',
    'ISFJ': 'earth',
    'ENTJ': 'water-dark',
    'ESTJ': 'fire',
    'INFJ': 'air',
    'ENFP': 'water',
    'ISTP': 'earth-dark'
};

export const useColorGradient = (type: Socionics.SocionicsType): React.CSSProperties => {
    return {
        '--color-gradient': `var(--color-elements-${GradientColorMap[type]})`
    };
};