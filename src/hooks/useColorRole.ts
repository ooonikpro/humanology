import React from 'react';

import { SocionicsType } from '../types';
import { ROLE } from '../constants/role';

export type UseColorRole = {
	label: string,
	color: React.CSSProperties
}

export const useColorRole = (role: SocionicsType.Role): UseColorRole => {
	return {
		label: ROLE[role].label,
		color: {
			'--color-role': `var(--color-quadra-${ROLE[role]})`
		}
	};
};