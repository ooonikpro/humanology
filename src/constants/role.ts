import { SocionicsType } from '../types';

export const ROLE: Record<SocionicsType.Role, SocionicsType.RoleProp> = {
    king: {
        label:      'Король',
        element:    'fire',
    },
    queen: {
        label:      'Королева',
        element:    'fire',
    },
    
    knight: {
        label:      'Рыцарь',
        element:    'water',
    },

    lady: {
        label:      'Дама',
        element:    'earth',
    },

    paige: {
        label:      'Паж',
        element:    'air',
    },
} as const;