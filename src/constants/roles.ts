import { Socionics } from '../types/Socionics';

export const Roles: Record<Socionics.Role, Socionics.QuadraProp> = {
	king: {
		label: 'Король',
		quadra: 'fire',
	},

	queen: {
		label: 'Королева',
		quadra: 'fire',
	},

	knight: {
		label: 'Рыцарь',
		quadra: 'water',
	},

	lady: {
		label: 'Дама',
		quadra: 'earth',
	},

	paige: {
		label: 'Паж',
		quadra: 'air',
	},
} as const;