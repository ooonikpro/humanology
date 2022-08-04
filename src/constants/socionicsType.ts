import { SocionicsType } from '../types';

export const SOCIONICS_TYPE: Record<SocionicsType.SocionicsType, SocionicsType.SocionicsTypeProp> = {
    innovator: {
        quadra:                 'air',
        role:                   'knight',
        alias:                  'Дон Кихот',
        mbti:                   'ENTP',
        mindKey:                'irrational1',
        mindset:                'causal',
        name:                   'Новатор',
        genderRole:             'male',
        club:                   'scientific',
        tarot:                  'swords',
        psychotype:             'infantile',
        populationPercentage:   '2 — 5%',
        aspects: {
            lives:      'ideas',
            creates:    'logic',
            mad:        'time',
            does:       'business',
            afraid:     'will',
            suffers:    'relations',
            desires:    'comfort',
            likes:      'emotions',
        },
        motivation:     'uniqueness',
        communication:  'business',
        companion:      'categorical',
        temperament:    'sanguine',
        alignment:      'chaoticNeutral',
        yung: [
            'intuit',
            'logic',
            'extravert',
            'irrational',
        ],
        reinin: [
            'static',
            'positivist',
            'asking',
            'tactician',
            'constructive',

            'process',
            'compliant',
            'careless',

            'reasonable',
            'subjective',
            'democrat',
        ],
    },

    diplomat: {
        quadra:                 'air',
        role:                   'lady',
        alias:                  'Дюма',
        mbti:                   'ISFP',
        mindKey:                'irrational2',
        mindset:                'dialectic',
        name:                   'Дипломат',
        genderRole:             'female',
        club:                   'social',
        tarot:                  'cups',
        psychotype:             'care',
        populationPercentage:   '5 — 9%',
        aspects: {
            lives:      'comfort',
            creates:    'emotions',
            mad:        'will',
            does:       'relations',
            afraid:     'time',
            suffers:    'business',
            desires:    'ideas',
            likes:      'logic',
        },
        motivation:     'wealth',
        communication:  'soulful',
        companion:      'sensitive',
        temperament:    'melancholic',
        alignment:      'chaoticGood',
        yung: [
            'sensor',
            'ethic',
            'introvert',
            'irrational',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'declaring',
            'strategist',
            'emotive',

            'result',
            'compliant',
            'careless',

            'reasonable',
            'subjective',
            'democrat',
        ],
    },

    enthusiast: {
        quadra:                 'air',
        role:                   'queen',
        alias:                  'Гюго',
        mbti:                   'ESFJ',
        mindKey:                'rational4',
        mindset:                'vortex',
        name:                   'Энтузиаст',
        genderRole:             'female',
        club:                   'social',
        tarot:                  'wands', 
        psychotype:             'care',
        populationPercentage:   '9 — 13%',
        aspects: {
            lives:      'emotions',
            creates:    'comfort',
            mad:        'relations',
            does:       'will',
            afraid:     'business',
            suffers:    'time',
            desires:    'logic',
            likes:      'ideas',
        },
        motivation:     'status',
        communication:  'passionate',
        companion:      'uncompromising',
        temperament:    'choleric',
        alignment:      'chaoticGood',
        yung: [
            'sensor',
            'ethic',
            'extravert',
            'rational',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'declaring',
            'tactician',
            'constructive',

            'result',
            'stubborn',
            'provident',

            'reasonable',
            'subjective',
            'democrat',
        ],
    },

    analytic: {
        quadra:                 'air',
        role:                   'paige',
        alias:                  'Робеспьер',
        mbti:                   'INTJ',
        mindKey:                'rational1',
        mindset:                'holo',
        name:                   'Аналитик',
        genderRole:             'male',
        club:                   'scientific',
        tarot:                  'pentacles', 
        psychotype:             'infantile',
        populationPercentage:   '2 — 4%',
        aspects: {
            lives:      'logic',
            creates:    'ideas',
            mad:        'business',
            does:       'time',
            afraid:     'relations',
            suffers:    'will',
            desires:    'emotions',
            likes:      'comfort',
        },
        motivation:     'selfSufficiency',
        communication:  'coldBlooded',
        companion:      'restrained',
        temperament:    'phlegmatic',
        alignment:      'trueNeutral',
        yung: [
            'intuit',
            'logic',
            'introvert',
            'irrational',
        ],
        reinin: [
            'static',
            'negativist',
            'asking',
            'strategist',
            'emotive',

            'result',
            'stubborn',
            'provident',

            'reasonable',
            'subjective',
            'democrat',
        ],
    },

    inspector: {
        quadra:                 'fire',
        role:                   'lady',
        alias:                  'Максим Горький',
        mbti:                   'ISTJ',
        mindKey:                'rational4',
        mindset:                'causal',
        name:                   'Инспектор',
        genderRole:             'male',
        club:                   'practice',
        tarot:                  'pentacles',
        psychotype:             'aggressor',
        populationPercentage:   '11 — 14%',
        aspects: {
            lives:      'logic',
            creates:    'will',
            mad:        'business',
            does:       'comfort',
            afraid:     'relations',
            suffers:    'ideas',
            desires:    'emotions',
            likes:      'time',
        },
        motivation:     'wealth',
        communication:  'coldBlooded',
        companion:      'sensitive',
        temperament:    'phlegmatic',
        alignment:      'lawfulEvil',
        yung: [
            'sensor',
            'logic',
            'introvert',
            'rational',
        ],
        reinin: [
            'static',
            'positivist',
            'declaring',
            'tactician',
            'emotive',

            'result',
            'stubborn',
            'careless',

            'decisive',
            'subjective',
            'aristocrat',
        ],
    },

    mentor: {
        quadra:                 'fire',
        role:                   'knight',
        alias:                  'Гамлет',
        mbti:                   'ENFJ',
        mindKey:                'rational1',
        mindset:                'dialectic',
        name:                   'Наставник',
        genderRole:             'female',
        club:                   'humanitarian',
        tarot:                  'wands',
        psychotype:             'victim',
        populationPercentage:   '2 — 5%',
        aspects: {
            lives:      'emotions',
            creates:    'time',
            mad:        'relations',
            does:       'ideas',
            afraid:     'business',
            suffers:    'comfort',
            desires:    'logic',
            likes:      'will',
        },
        motivation:     'uniqueness',
        communication:  'passionate',
        companion:      'categorical',
        temperament:    'choleric',
        alignment:      'chaoticEvil',
        yung: [
            'intuit',
            'ethic',
            'extravert',
            'rational',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'asking',
            'strategist',
            'constructive',

            'process',
            'stubborn',
            'careless',

            'decisive',
            'subjective',
            'aristocrat',
        ],
    },

    lyricist: {
        quadra:                 'fire',
        role:                   'paige',
        alias:                  'Есенин',
        mbti:                   'INFP',
        mindKey:                'irrational1',
        mindset:                'vortex',
        name:                   'Лирик',
        genderRole:             'female',
        club:                   'humanitarian',
        tarot:                  'cups',
        psychotype:             'victim',
        populationPercentage:   '4 — 5%',
        aspects: {
            lives:      'time',
            creates:    'emotions',
            mad:        'ideas',
            does:       'relations',
            afraid:     'comfort',
            suffers:    'business',
            desires:    'will',
            likes:      'logic',
        },
        motivation:     'selfSufficiency',
        communication:  'soulful',
        companion:      'provident',
        temperament:    'melancholic',
        alignment:      'chaoticNeutral',
        yung: [
            'intuit',
            'ethic',
            'introvert',
            'irrational',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'asking',
            'tactician',
            'emotive',

            'result',
            'compliant',
            'provident',

            'decisive',
            'subjective',
            'aristocrat',
        ],
    },

    leader: {
        quadra:                 'fire',
        role:                   'king',
        alias:                  'Жуков',
        mbti:                   'ESTP',
        mindKey:                'irrational1',
        mindset:                'vortex',
        name:                   'Лидер',
        genderRole:             'male',
        club:                   'practice',
        tarot:                  'swords',
        psychotype:             'aggressor',
        populationPercentage:   '4 — 5%',
        aspects: {
            lives:      'will',
            creates:    'logic',
            mad:        'comfort',
            does:       'business',
            afraid:     'ideas',
            suffers:    'relations',
            desires:    'time',
            likes:      'emotions',
        },
        motivation:     'status',
        communication:  'business',
        companion:      'volitional',
        temperament:    'sanguine',
        alignment:                          'chaoticEvil',
        yung: [
            'sensor',
            'logic',
            'extravert',
            'irrational',
        ],
        reinin: [
            'static',
            'negativist',
            'declaring',
            'strategist',
            'constructive',

            'result',
            'compliant',
            'provident',

            'decisive',
            'subjective',
            'aristocrat',
        ],
    },

    critic: {
        quadra:                 'water',
        role:                   'paige',
        alias:                  'Бальзак',
        mbti:                   'INTP',
        mindKey:                'irrational1',
        mindset:                'dialectic',
        name:                   'Критик',
        genderRole:             'male',
        club:                   'scientific',
        tarot:                  'swords', 
        psychotype:             'victim',
        populationPercentage:   '3 — 5%',
        aspects: {
            lives:      'time',
            creates:    'business',
            mad:        'ideas',
            does:       'logic',
            afraid:     'comfort',
            suffers:    'emotions',
            desires:    'will',
            likes:      'relations',
        },
        motivation:     'selfSufficiency',
        communication:  'passionate',
        companion:      'provident',
        temperament:    'melancholic',
        alignment:      'chaoticNeutral',
        yung: [
            'intuit',
            'logic',
            'introvert',
            'irrational',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'declaring',
            'tactician',
            'constructive',

            'process',
            'stubborn',
            'provident',

            'decisive',
            'objective',
            'democrat',
        ],
    },

    politic: {
        quadra:                 'water',
        role:                   'queen',
        alias:                  'Наполеон',
        mbti:                   'ESFP',
        mindKey:                'irrational2',
        mindset:                'causal',
        name:                   'Политик',
        genderRole:             'female',
        club:                   'social',
        tarot:                  'cups', 
        psychotype:             'aggressor',
        populationPercentage:   '4 — 9%',
        aspects: {
            lives:      'will',
            creates:    'relations',
            mad:        'comfort',
            does:       'emotions',
            afraid:     'ideas',
            suffers:    'logic',
            desires:    'time',
            likes:      'business',
        },
        motivation:     'status',
        communication:  'passionate',
        companion:      'volitional',
        temperament:    'sanguine',
        alignment:      'chaoticEvil',
        yung: [
            'sensor',
            'ethic',
            'extravert',
            'irrational',
        ],
        reinin: [
            'static',
            'positivist',
            'asking',
            'strategist',
            'emotive',

            'process',
            'stubborn',
            'provident',

            'decisive',
            'objective',
            'democrat',
        ],
    },

    guardian: {
        quadra:                 'water',
        role:                   'lady',
        alias:                  'Драйзер',
        mbti:                   'ISFJ',
        mindKey:                'rational4',
        mindset:                'causal',
        name:                   'Хранитель',
        genderRole:             'female',
        club:                   'social',
        tarot:                  'wands', 
        psychotype:             'aggressor',
        populationPercentage:   '9 — 14%',
        aspects: {
            lives:      'relations',
            creates:    'will',
            mad:        'emotions',
            does:       'comfort',
            afraid:     'logic',
            suffers:    'ideas',
            desires:    'business',
            likes:      'time',
        },
        motivation:     'wealth',
        communication:  'soulful',
        companion:      'sensitive',
        temperament:    'phlegmatic',
        alignment:      'lawfulGood',
        yung: [
            'sensor',
            'ethic',
            'introvert',
            'rational',
        ],
        reinin: [
            'static',
            'negativist',
            'asking',
            'tactician',
            'constructive',

            'result',
            'compliant',
            'provident',

            'decisive',
            'objective',
            'democrat',
        ],
    },

    businessman: {
        quadra:                 'water',
        role:                   'knight',
        alias:                  'Джек Лондон',
        mbti:                   'ENTJ',
        mindKey:                'rational1',
        mindset:                'vortex',
        name:                   'Предприниматель',
        genderRole:             'male',
        club:                   'scientific',
        tarot:                  'pentacles', 
        psychotype:             'victim',
        populationPercentage:   '2 — 5%',
        aspects: {
            lives:      'business',
            creates:    'time',
            mad:        'logic',
            does:       'ideas',
            afraid:     'emotions',
            suffers:    'comfort',
            desires:    'relations',
            likes:      'will',
        },
        motivation:     'uniqueness',
        communication:  'business',
        companion:      'stubborn',
        temperament:    'choleric',
        alignment:      'neutralEvil',
        yung: [
            'intuit',
            'logic',
            'extravert',
            'rational',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'declaring',
            'strategist',
            'emotive',

            'result',
            'compliant',
            'careless',

            'decisive',
            'objective',
            'democrat',
        ],
    },

    administrator: {
        quadra:                 'earth',
        role:                   'king',
        alias:                  'Штирлиц',
        mbti:                   'ESTJ',
        mindKey:                'rational4',
        mindset:                'dialectic',
        name:                   'Администратор',
        genderRole:             'male',
        club:                   'practice',
        tarot:                  'pentacles',
        psychotype:             'care',
        populationPercentage:   '8 — 12%',
        aspects: {
            lives:              'business',
            creates:            'comfort',
            mad:                'logic',
            does:               'will',
            afraid:             'emotions',
            suffers:            'time',
            desires:            'relations',
            likes:              'ideas',
        },
        motivation:             'status',
        communication:          'business',
        companion:              'stubborn',
        temperament:            'choleric',
        alignment:              'lawfulEvil',
        yung: [
            'sensor',
            'logic',
            'extravert',
            'rational',
        ],
        reinin: [
            'dynamic',
            'negativist',
            'asking',
            'tactician',
            'emotive',

            'process',
            'compliant',
            'provident',

            'reasonable',
            'objective',
            'aristocrat',
        ],
    },

    humanist: {
        quadra:                 'earth',
        role:                   'paige',
        alias:                  'Достоевский',
        mbti:                   'INFJ',
        mindKey:                'rational1',
        mindset:                'causal',
        name:                   'Гуманист',
        genderRole:             'female',
        club:                   'humanitarian',
        tarot:                  'wands', 
        psychotype:             'infantile',
        populationPercentage:   '1 — 3%',
        aspects: {
            lives:              'relations',
            creates:            'ideas',
            mad:                'emotions',
            does:               'time',
            afraid:             'logic',
            suffers:            'will',
            desires:            'business',
            likes:              'comfort',
        },
        motivation:             'selfSufficiency',
        communication:          'coldBlooded',
        companion:              'provident',
        temperament:            'phlegmatic',
        alignment:              'neutralGood',
        yung: [
            'intuit',
            'ethic',
            'introvert',
            'rational',
        ],
        reinin: [
            'static',
            'positivist',
            'declaring',
            'strategist',
            'constructive',

            'process',
            'compliant',
            'provident',

            'reasonable',
            'objective',
            'aristocrat',
        ],
    },

    adviser: {
        quadra:                 'earth',
        role:                   'knight',
        alias:                  'Гексли',
        mbti:                   'ENFP',
        mindKey:                'irrational1',
        mindset:                'holo',
        name:                   'Советчик',
        genderRole:             'female',
        club:                   'humanitarian',
        tarot:                  'cups',
        psychotype:             'infantile',
        populationPercentage:   '6 — 8%',
        aspects: {
            lives:      'ideas',
            creates:    'relations',
            mad:        'time',
            does:       'emotions',
            afraid:     'will',
            suffers:    'logic',
            desires:    'comfort',
            likes:      'business',
        },
        motivation:     'uniqueness',
        communication:  'passionate',
        companion:      'uncompromising',
        temperament:    'sanguine',
        alignment:      'chaoticGood',
        yung: [
            'intuit',
            'ethic',
            'extravert',
            'irrational',
        ],
        reinin: [
            'static',
            'negativist',
            'declaring',
            'tactician',
            'emotive',

            'result',
            'stubborn',
            'careless',

            'reasonable',
            'objective',
            'aristocrat',
        ],
    },

    master: {
        quadra:                 'earth',
        role:                   'lady',
        alias:                  'Габен',
        mbti:                   'ISTP',
        mindKey:                'irrational1',
        mindset:                'vortex',
        name:                   'Мастер',
        genderRole:             'male',
        club:                   'practice',
        tarot:                  'swords', 
        psychotype:             'care',
        populationPercentage:   '4 — 6%',
        aspects: {
            lives:      'comfort',
            creates:    'business',
            mad:        'will',
            does:       'logic',
            afraid:     'time',
            suffers:    'emotions',
            desires:    'ideas',
            likes:      'relations',
        },
        motivation:     'wealth',
        communication:  'coldBlooded',
        companion:      'restrained',
        temperament:    'melancholic',
        alignment:      'trueNeutral',
        yung: [
            'sensor',
            'logic',
            'introvert',
            'irrational',
        ],
        reinin: [
            'dynamic',
            'positivist',
            'asking',
            'strategist',
            'constructive',

            'result',
            'stubborn',
            'careless',

            'reasonable',
            'objective',
            'aristocrat',
        ],
    },
};