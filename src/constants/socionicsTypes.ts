import { Socionics } from '../types';

export const INTERTYPES: Record<Socionics.SocionicsType, Socionics.IntertypeProp> = {
    ENTP: {
        element: 'air',
        role: 'knight',
        alias: 'Дон Кихот',
        mindKey: 'irrational-1',
        mindset: 'casual',
        name: 'Новатор',
        gender: 'male',
        club: 'scientific',
        tarot: 'swords', // масть
        psychotype: 'infantile', // группа
        populationPercentage: '2 — 5%',
        aspects: {
            lives: 'ideas',
            creates: 'logic',
            mad: 'time',
            does: 'business',
            afraid: 'will',
            suffers: 'people',
            desires: 'comfort',
            likes: 'emotions',
        },
        stimulant: 'uniqueness',
        communication: 'business',
        companion: 'categorical',
        temperament: 'sanguine',
        ideology: 'chaoticNeutral',
        yungs: [
            'irrational',
            'intuit',
            'logic',
            'extravert',
        ],
        reinin: [
            'static',
            'positivist',
            'questim',
            'tactician',
            'constructivist',

            'process',
            'compliant',
            'careless',

            'reasonable',
            'subjective',
            'democrat',
        ],
    },

    ISFP: {
        element: 'air',
        role: 'lady',
        alias: 'Дюма',
        mindKey: 'irrational-2',
        mindset: 'algorithmic',
        name: 'Дипломат',
        gender: 'female',
        club: 'social',
        tarot: 'cups', // масть
        psychotype: 'care', // группа
        populationPercentage: '5 — 9%',
        aspects: {
            lives: 'comfort',
            creates: 'emotions',
            mad: 'will',
            does: 'people',
            afraid: 'time',
            suffers: 'business',
            desires: 'ideas',
            likes: 'logic',
        },
        stimulant: 'wealth',
        communication: 'sincere',
        companion: 'sensitive',
        temperament: 'melancholic',
        ideology: 'chaoticGood',
        yungs: [
            'irrational',
            'sensory',
            'ethic',
            'introvert',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'declamtim',
            'strategist',
            'emotivist',

            'result',
            'compliant',
            'careless',

            'reasonable',
            'subjective',
            'democrat',
        ],
    },

    ESFJ: {
        element: 'air',
        role: 'queen',
        alias: 'Гюго',
        mindKey: 'rational-4',
        mindset: 'vortical',
        name: 'Энтузиаст',
        gender: 'female',
        club: 'social',
        tarot: 'wands', // масть
        psychotype: 'care', // группа
        populationPercentage: '9 — 13%',
        aspects: {
            lives: 'emotions',
            creates: 'comfort',
            mad: 'people',
            does: 'will',
            afraid: 'business',
            suffers: 'time',
            desires: 'logic',
            likes: 'ideas',
        },
        stimulant: 'status',
        communication: 'passionate',
        companion: 'uncompromising',
        temperament: 'choleric',
        ideology: 'chaoticGood',
        yungs: [
            'sensory',
            'ethic',
            'extravert',
            'rational',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'declamtim',
            'tactician',
            'constructivist',

            'result',
            'stubborn',
            'provident',

            'reasonable',
            'subjective',
            'democrat',
        ],
    },

    INTJ: {
        element: 'air',
        role: 'paige',
        alias: 'Робеспьер',
        mindKey: 'rational-1',
        mindset: 'holographic',
        name: 'Аналитик',
        gender: 'male',
        club: 'scientific',
        tarot: 'pentacles', // масть
        psychotype: 'infantile', // группа
        populationPercentage: '2 — 4%',
        aspects: {
            lives: 'logic',
            creates: 'ideas',
            mad: 'business',
            does: 'time',
            afraid: 'people',
            suffers: 'will',
            desires: 'emotions',
            likes: 'comfort',
        },
        stimulant: 'selfSufficiency',
        communication: 'coldBlooded',
        companion: 'restrained',
        temperament: 'phlegmatic',
        ideology: 'lawfulNeutral',
        yungs: [
            'rational',
            'intuit',
            'logic',
            'introvert',
        ],
        reinin: [
            'static',
            'negativist',
            'questim',
            'strategist',
            'emotivist',

            'result',
            'stubborn',
            'provident',

            'reasonable',
            'subjective',
            'democrat',
        ],
    },

    ISTJ: {
        element: 'fire',
        role: 'lady',
        alias: 'Максим Горький',
        mindKey: 'rational-4',
        mindset: 'casual',
        name: 'Инспектор',
        gender: 'female',
        club: 'practice',
        tarot: 'pentacles', // масть
        psychotype: 'aggressor', // группа
        populationPercentage: '11 — 14%',
        aspects: {
            lives: 'logic',
            creates: 'will',
            mad: 'business',
            does: 'comfort',
            afraid: 'people',
            suffers: 'ideas',
            desires: 'emotions',
            likes: 'time',
        },
        stimulant: 'wealth',
        communication: 'coldBlooded',
        companion: 'sensitive',
        temperament: 'phlegmatic',
        ideology: 'lawfulEvil',
        yungs: [
            'rational',
            'sensory',
            'logic',
            'introvert',
        ],
        reinin: [
            'static',
            'positivist',
            'declamtim',
            'tactician',
            'emotivist',

            'result',
            'stubborn',
            'careless',

            'decisive',
            'subjective',
            'aristocrat',
        ],
    },

    ENFJ: {
        element: 'fire',
        role: 'knight',
        alias: 'Гамлет',
        mindKey: 'rational-1',
        mindset: 'algorithmic',
        name: 'Наставник',
        gender: 'male',
        club: 'humanitarian',
        tarot: 'wands', // масть
        psychotype: 'victim', // группа
        populationPercentage: '2 — 5%',
        aspects: {
            lives: 'emotions',
            creates: 'time',
            mad: 'people',
            does: 'ideas',
            afraid: 'business',
            suffers: 'comfort',
            desires: 'logic',
            likes: 'will',
        },
        stimulant: 'uniqueness',
        communication: 'passionate',
        companion: 'categorical',
        temperament: 'choleric',
        ideology: 'chaoticEvil',
        yungs: [
            'rational',
            'intuit',
            'ethic',
            'extravert',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'questim',
            'strategist',
            'constructivist',

            'process',
            'stubborn',
            'careless',

            'decisive',
            'subjective',
            'aristocrat',
        ],
    },

    INFP: {
        element: 'fire',
        role: 'paige',
        alias: 'Есенин',
        mindKey: 'irrational-1',
        mindset: 'vortical',
        name: 'Лирик',
        gender: 'female',
        club: 'humanitarian',
        tarot: 'cups', // масть
        psychotype: 'victim', // группа
        populationPercentage: '4 — 5%',
        aspects: {
            lives: 'time',
            creates: 'emotions',
            mad: 'ideas',
            does: 'people',
            afraid: 'comfort',
            suffers: 'business',
            desires: 'will',
            likes: 'logic',
        },
        stimulant: 'selfSufficiency',
        communication: 'sincere',
        companion: 'provident',
        temperament: 'melancholic',
        ideology: 'chaoticNeutral',
        yungs: [
            'irrational',
            'intuit',
            'ethic',
            'introvert',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'questim',
            'tactician',
            'emotivist',

            'result',
            'compliant',
            'provident',

            'decisive',
            'subjective',
            'aristocrat',
        ],
    },

    ESTP: {
        element: 'fire',
        role: 'king',
        alias: 'Жуков',
        mindKey: 'irrational-1',
        mindset: 'vortical',
        name: 'Лидер',
        gender: 'male',
        club: 'practice',
        tarot: 'swords', // масть
        psychotype: 'aggressor', // группа
        populationPercentage: '4 — 5%',
        aspects: {
            lives: 'will',
            creates: 'logic',
            mad: 'comfort',
            does: 'business',
            afraid: 'ideas',
            suffers: 'people',
            desires: 'time',
            likes: 'emotions',
        },
        stimulant: 'status',
        communication: 'business',
        companion: 'volitional',
        temperament: 'sanguine',
        ideology: 'chaoticGood',
        yungs: [
            'irrational',
            'sensory',
            'logic',
            'extravert',
        ],
        reinin: [
            'static',
            'negativist',
            'declamtim',
            'strategist',
            'constructivist',

            'result',
            'compliant',
            'provident',

            'decisive',
            'subjective',
            'aristocrat',
        ],
    },

    INTP: {
        element: 'water',
        role: 'paige',
        alias: 'Бальзак',
        mindKey: 'irrational-1',
        mindset: 'algorithmic',
        name: 'Критик',
        gender: 'male',
        club: 'scientific',
        tarot: 'swords', // масть
        psychotype: 'victim', // группа
        populationPercentage: '3 — 5%',
        aspects: {
            lives: 'time',
            creates: 'business',
            mad: 'ideas',
            does: 'logic',
            afraid: 'comfort',
            suffers: 'emotions',
            desires: 'will',
            likes: 'people',
        },
        stimulant: 'selfSufficiency',
        communication: 'passionate',
        companion: 'provident',
        temperament: 'melancholic',
        ideology: 'trueNeutral',
        yungs: [
            'irrational',
            'intuit',
            'logic',
            'introvert',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'declamtim',
            'tactician',
            'constructivist',

            'process',
            'stubborn',
            'provident',

            'decisive',
            'objective',
            'democrat',
        ],
    },

    ESFP: {
        element: 'water',
        role: 'queen',
        alias: 'Наполеон',
        mindKey: 'irrational-2',
        mindset: 'casual',
        name: 'Политик',
        gender: 'female',
        club: 'social',
        tarot: 'cups', // масть
        psychotype: 'aggressor', // группа
        populationPercentage: '4 — 9%',
        aspects: {
            lives: 'will',
            creates: 'people',
            mad: 'comfort',
            does: 'emotions',
            afraid: 'ideas',
            suffers: 'logic',
            desires: 'time',
            likes: 'business',
        },
        stimulant: 'status',
        communication: 'passionate',
        companion: 'volitional',
        temperament: 'sanguine',
        ideology: 'chaoticEvil',
        yungs: [
            'irrational',
            'sensory',
            'ethic',
            'extravert',
        ],
        reinin: [
            'static',
            'positivist',
            'questim',
            'strategist',
            'emotivist',

            'process',
            'stubborn',
            'provident',

            'decisive',
            'objective',
            'democrat',
        ],
    },

    ISFJ: {
        element: 'water',
        role: 'lady',
        alias: 'Драйзер',
        mindKey: 'rational-4',
        mindset: 'casual',
        name: 'Хранитель',
        gender: 'female',
        club: 'social',
        tarot: 'wands', // масть
        psychotype: 'aggressor', // группа
        populationPercentage: '9 — 14%',
        aspects: {
            lives: 'people',
            creates: 'will',
            mad: 'emotions',
            does: 'comfort',
            afraid: 'logic',
            suffers: 'ideas',
            desires: 'business',
            likes: 'time',
        },
        stimulant: 'wealth',
        communication: 'sincere',
        companion: 'sensitive',
        temperament: 'phlegmatic',
        ideology: 'lawfulEvil',
        yungs: [
            'rational',
            'sensory',
            'ethic',
            'introvert',
        ],
        reinin: [
            'static',
            'negativist',
            'questim',
            'tactician',
            'constructivist',

            'result',
            'compliant',
            'provident',

            'decisive',
            'objective',
            'democrat',
        ],
    },

    ENTJ: {
        element: 'water',
        role: 'knight',
        alias: 'Джек Лондон',
        mindKey: 'rational-1',
        mindset: 'vortical',
        name: 'Предприниматель',
        gender: 'male',
        club: 'scientific',
        tarot: 'pentacles', // масть
        psychotype: 'victim', // группа
        populationPercentage: '2 — 5%',
        aspects: {
            lives: 'business',
            creates: 'time',
            mad: 'logic',
            does: 'ideas',
            afraid: 'emotions',
            suffers: 'comfort',
            desires: 'people',
            likes: 'will',
        },
        stimulant: 'uniqueness',
        communication: 'business',
        companion: 'stubborn',
        temperament: 'choleric',
        ideology: 'neutralEvil',
        yungs: [
            'rational',
            'intuit',
            'logic',
            'extravert',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'declamtim',
            'strategist',
            'emotivist',

            'result',
            'compliant',
            'careless',

            'decisive',
            'objective',
            'democrat',
        ],
    },

    ESTJ: {
        element: 'earth',
        role: 'king',
        alias: 'Штирлиц',
        mindKey: 'rational-4',
        mindset: 'algorithmic',
        name: 'Администратор',
        gender: 'male',
        club: 'practice',
        tarot: 'pentacles', // масть
        psychotype: 'care', // группа
        populationPercentage: '8 — 12%',
        aspects: {
            lives: 'business',
            creates: 'comfort',
            mad: 'logic',
            does: 'will',
            afraid: 'emotions',
            suffers: 'time',
            desires: 'people',
            likes: 'ideas',
        },
        stimulant: 'status',
        communication: 'business',
        companion: 'stubborn',
        temperament: 'choleric',
        ideology: 'lawfulEvil',
        yungs: [
            'rational',
            'sensory',
            'logic',
            'extravert',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'questim',
            'tactician',
            'emotivist',

            'process',
            'compliant',
            'provident',

            'reasonable',
            'objective',
            'aristocrat',
        ],
    },

    INFJ: {
        element: 'earth',
        role: 'paige',
        alias: 'Достоевский',
        mindKey: 'rational-1',
        mindset: 'casual',
        name: 'Гуманист',
        gender: 'female',
        club: 'humanitarian',
        tarot: 'wands', // масть
        psychotype: 'infantile', // группа
        populationPercentage: '1 — 3%',
        aspects: {
            lives: 'people',
            creates: 'ideas',
            mad: 'emotions',
            does: 'time',
            afraid: 'logic',
            suffers: 'will',
            desires: 'business',
            likes: 'comfort',
        },
        stimulant: 'selfSufficiency',
        communication: 'coldBlooded',
        companion: 'provident',
        temperament: 'phlegmatic',
        ideology: 'neutralGood',
        yungs: [
            'rational',
            'intuit',
            'ethic',
            'introvert',
        ],
        reinin: [
            'static',
            'positivist',
            'declamtim',
            'strategist',
            'constructivist',

            'process',
            'compliant',
            'provident',

            'reasonable',
            'objective',
            'aristocrat',
        ],
    },

    ENFP: {
        element: 'earth',
        role: 'knight',
        alias: 'Гексли',
        mindKey: 'irrational-1',
        mindset: 'holographic',
        name: 'Советчик',
        gender: 'male',
        club: 'humanitarian',
        tarot: 'cups', // масть
        psychotype: 'infantile', // группа
        populationPercentage: '6 — 8%',
        aspects: {
            lives: 'ideas',
            creates: 'people',
            mad: 'time',
            does: 'emotions',
            afraid: 'will',
            suffers: 'logic',
            desires: 'comfort',
            likes: 'business',
        },
        stimulant: 'uniqueness',
        communication: 'passionate',
        companion: 'uncompromising',
        temperament: 'sanguine',
        ideology: 'chaoticGood',
        yungs: [
            'irrational',
            'intuit',
            'ethic',
            'extravert',
        ],
        reinin: [
            'static',
            'negativist',
            'declamtim',
            'tactician',
            'emotivist',

            'result',
            'stubborn',
            'careless',

            'reasonable',
            'objective',
            'aristocrat',
        ],
    },

    ISTP: {
        element: 'earth',
        role: 'lady',
        alias: 'Габен',
        mindKey: 'irrational-1',
        mindset: 'vortical',
        name: 'Мастер',
        gender: 'female',
        club: 'practice',
        tarot: 'swords', // масть
        psychotype: 'care', // группа
        populationPercentage: '4 — 6%',
        aspects: {
            lives: 'comfort',
            creates: 'business',
            mad: 'will',
            does: 'logic',
            afraid: 'time',
            suffers: 'emotions',
            desires: 'ideas',
            likes: 'people',
        },
        stimulant: 'wealth',
        communication: 'coldBlooded',
        companion: 'restrained',
        temperament: 'melancholic',
        ideology: 'trueNeutral',
        yungs: [
            'irrational',
            'sensory',
            'logic',
            'introvert',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'questim',
            'strategist',
            'constructivist',

            'result',
            'stubborn',
            'careless',

            'reasonable',
            'objective',
            'aristocrat',
        ],
    },
};
