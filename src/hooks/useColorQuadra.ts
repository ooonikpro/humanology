import React from 'react';

import { Quadras } from '../constants/quadras';
import { Socionics } from '../types/Socionics';

export type ColorQuadra = {
	label: string,
	color: React.CSSProperties
}

export const useColorQuadra = (quadra: Socionics.Quadra): ColorQuadra => {
	return {
		label: Quadras[quadra],
		color: {
			'--color-quadra': `var(--color-quadra-${quadra})`
		}
	};
};