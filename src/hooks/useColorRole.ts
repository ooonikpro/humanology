import React from 'react';

import { Socionics } from '../types/Socionics';
import { Roles } from '../constants/roles';

export type ColorRole = {
	label: string,
	color: React.CSSProperties
}

export const useColorRole = (role: Socionics.Role): ColorRole => {
	return {
		label: Roles[role].label,
		color: {
			'--color-role': `var(--color-role-${Roles[role].quadra})`
		}
	}
}