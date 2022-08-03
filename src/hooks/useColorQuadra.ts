import React from 'react';

import { ELEMENTS } from '../constants/quadras';
import { SocionicsType } from '../types';

export type ColorQuadra = {
	label: string,
	color: React.CSSProperties
}

export const useColorQuadra = (quadra: SocionicsType.Quadra): ColorQuadra => {
	return {
		label: ELEMENTS[quadra],
		color: {
			'--color-quadra': `var(--color-quadra-${quadra}]`
		}
	};
};