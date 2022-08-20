import { Humanology } from '../types';

export const ROLE: Record<Humanology.Role, Humanology.SignProp> = {
    knight: {
        label: 'Рыцарь',
        element: 'water',
    },

    king: {
        label: 'Король',
        element: 'fire',
    },

    queen: {
        label: 'Королева',
        element: 'fire',
    },

    lady: {
        label: 'Дама',
        element: 'earth',
    },

    butler: {
        label: 'Дворецкий',
        element: 'air',
    },
} as const;
